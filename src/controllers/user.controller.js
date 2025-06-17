import User from "../models/user.model.js";
import APIError from "../utils/apiError.utils.js";
import APIResponse from "../utils/apiResponse.utils.js";
import asychandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/uploadFileOnCloudinary.utils.js";
import bcrypt from "bcrypt";

const generateTokens = async (id) => {
  try {
    // Find User
    // Apply method - access token
    // save token in DB
    // return token

    const findUser = await User.findById(id);
    const accessToken = await findUser.generateAccessToken();

    const refreshToken = await findUser.generateRefreshToken();

    findUser.refreshToken = refreshToken;
    await findUser.save({ validateBeforeSave: false });

    return { refreshToken, accessToken };
  } catch (error) {
    console.log("Token Not Generated : ", error);
  }
};

const Register = asychandler(async (req, res) => {
  // Accrss Data from the res
  // Validation for the Required Fields
  // Check user already Registered username & email
  // access the files
  // upload image on the cloudinary - access url
  // create user object
  // remove sensitive and unnesecery fields
  // Check for user Creattion
  // retun res

  console.log(req.url);

  const {
    first_name,
    last_name,
    user_name,
    email,
    password,
    phone,
    bio,
    gender,
  } = req.body;

  // console.log(    first_name,    last_name,    user_name,    email,    password,    phone,    bio,    gender  );

  const requiredFields = ["user_name", "email", "password"];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(301).json(new APIResponse(`${field} is Required :)`, {}, 300));
      throw new APIError(`${field} is Required :)`, 300);
    }
  }

  const findUser = await User.findOne({
    $or: [{ user_name }, { email }],
  });
  // console.log("FindUser", findUser);

  if (findUser) {
    res
      .status(300)
      .json(
        new APIResponse(
          "User Already Registered with the email or username",
          {},
          300
        )
      );
    throw new APIError(
      "User Already Registered with the email or username",
      300
    );
  }
  // console.log(req.files);

  let avatarPath;

  if (!req.files.avatar) {
    res
      .status(301)
      .json(new APIResponse(`Avatar is Required is Required :)`, {}, 300));
    throw new APIError(`Avatar is Required :)`, 300);
  } else avatarPath = req.files.avatar[0].path;

  let coverImage = req.files?.coverImage ? req.files.coverImage[0].path : "";
  console.log(avatarPath);

  const avatarURL = await uploadOnCloudinary(avatarPath);
  const coverImageURL = await uploadOnCloudinary(coverImage);

  // console.log(avatarURL);
  // console.log(coverImageURL);

  const createdUser = await User.create({
    first_name,
    last_name,
    user_name,
    email,
    password,
    phone,
    bio,
    gender,
    avatar: avatarURL,
    coverImage: coverImageURL,
  });

  const userResponse = await User.findById(createdUser?._id).select(
    "-password "
  );
  console.log(userResponse);

  if (!userResponse) {
    res
      .status(500)
      .json(new APIResponse("Error When User Created !! ", {}, 500));
    throw new APIError("Error When User Created !!", 500);
  }

  res
    .status(200)
    .json(
      new APIResponse(
        "User Will Be Registred !!",
        userResponse ? userResponse : {},
        200
      )
    );
});

const login = asychandler(async (req, res) => {
  console.log(req.url);

  // Get Data
  // Check for required Fields
  // findUser
  // compare passsword palin and hashed

  //  generate access and And Refresh Toke also Save Acces toke in DB
  // send cookies

  // console.log(req.body);
  const { user_name, email, password } = req.body;
  // console.log(user_name , email , password);

  const findUser = await User.findOne({
    $and: [{ user_name }, { email }],
  });

  // console.log(findUser);

  if (!findUser) {
    res.status(300).json(new APIResponse("User Not Registered .", {}, 300));
    throw new APIError("User Not Registred", 300);
  }

  // const isPasswordValid = await User.isPasswordCorrect(password)

  const isPasswordValid = await bcrypt.compare(password, findUser?.password);
  // console.log(isPasswordValid);

  if (!isPasswordValid) {
    res.status(300).json(new APIResponse("Incorrect Password", {}, 300));
    throw new APIError("Incorrect Password", 300);
  }

  const { accessToken, refreshToken } = await generateTokens(findUser?._id);
  // console.log("Access Token", accessToken);
  const loggedInUser = await User.findById(findUser?._id).select(
    "-password -refreshToken"
  );

  const cookiesOptions = {
    httpOnly: true,
    secure: true,
  };

  res.status(200);
  res.cookie("accessToken", accessToken, cookiesOptions);
  res
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .json(
      new APIResponse("User Loggend In Success Fully !!!", loggedInUser, 200)
    );
});

const logOut = asychandler(async (req, res) => {
  console.log(req.url);
  console.log(req.user);
  await User.findByIdAndUpdate(
    req.user?._id,
    {
      $unset: { refreshToken: 1 },
    },
    {
      new: true,
    }
  );

  res.status(200).json(new APIResponse("User Log Out Success Fully", {}, 200));
});

export { Register, login, logOut };

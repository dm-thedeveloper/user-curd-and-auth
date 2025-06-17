import jwt from "jsonwebtoken";
import APIError from "../utils/apiError.utils.js";
import APIResponse from "../utils/apiResponse.utils.js";
import asychandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";

const verifyJWT = asychandler(async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      res.status(400).json(new APIResponse("UnAuthorized Request", null, 401));
      throw new APIError("UnAuthorized Request", 401);
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(decodedToken);
    const findUser = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    // console.log(findUser);

    if (!findUser) {
      res.status(400).json(new APIResponse("Invalid Access Token", null, 401));
      throw new APIError("InValid Access Token", 401);
    }

    req.user = findUser;

    next();
  } catch (error) {
    throw new APIError(error.message || "Invalid accss token" , 401)
  }
});

export default verifyJWT;

import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const generateRandomNumber = (max = 100) => {
  return Math.floor(Math.random() * max);
};

const userSchema = new mongoose.Schema(
  // Basic Info
  {
    first_name: {
      type: String,
      // required :true,
      trim: true,
      index: true,
    },
    last_name: {
      type: String,
      // required :true,
      trim: true,
      index: true,
    },
    user_name: {
      type: String,
      required: [true, "user is Required"],
      trim: true,
      index: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      // unique: true,
      lowercase: true,
      trim: true,
      // required: [true, "Password is Required"],
    },
    password: {
      type: String,
      // required: [true, "Password is Required"],
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
    },

    // Profile
    avatar: {
      type: String,
      // required: true,
    },
    coverImage: String,
    bio: String,
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },

    // Account Settings

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    settings: {
      notifications: {

        type: Boolean,
        default: false,
      },
      theme: {
        type: String,
        enum: ["Dark", "Light", "System"],
        default: "System",
      },
    },

    //RelationShips
    posts: {

      type: Number,
      default: generateRandomNumber(),
    },
    followers: {

      type: Number,
      default: generateRandomNumber(300000),
    },
    following: {
      type: Number,
      default: generateRandomNumber(2000),
    },
    teams: [{ type: Schema.Types.ObjectId, ref: "User" }],
    refreshToken: String,
    otp: {
      type: Number,
      default: generateRandomNumber(12345),
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// create a method which Compampare the hased and Plain password

userSchema.methods.isPasswordCorrect  = async function (passsword)  {
  return await bcrypt.compare(passsword , this.passsword)
}


const User = mongoose.model("User", userSchema);

export default User;

// Basic Info

// first name - req
// last name - req
// username = firstname + lastname
// email - req
// password - req
// phone

// authentication

// resfresToken
//  opt

// profile

// avatar
// coverImage
// bio
// gender - enum

// account Setting

// role - enum : user , admin
// Sttings  : {
//  notifucation  : boolean
// theme - enum
// }

// RelationShips

// posts
// followers
// following
// teams  [ users ]

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Configuration

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Create a utility function which accept the path and upload on the cloudinary and return the url

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return;

    const response = await cloudinary.uploader.upload(filePath);

    return response.url;
    
  } catch (error) {
    console.log("File Not Uploaded :)", error);
  }
};

export default uploadOnCloudinary;

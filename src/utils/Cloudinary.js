import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadOnCloundinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploading
    console.log("file is not uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    // remove locally save temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath);
  }
};

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {console.log(result); });

export { uploadOnCloundinary };

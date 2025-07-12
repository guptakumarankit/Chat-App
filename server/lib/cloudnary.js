import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config(); // make sure .env is loaded

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

// // Ping Cloudinary to verify credentials
// cloudinary.api.ping()
//   .then(result => {
//     console.log("Cloudinary credentials are valid:", result);
//   })
//   .catch(error => {
//     console.error("Invalid Cloudinary credentials:", error);
//   });

export default cloudinary;
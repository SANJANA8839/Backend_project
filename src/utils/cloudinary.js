// Description: This module configures Cloudinary for image uploads and provides a function to upload images.

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

    // Configuration  (got the code from the decumentation of cloudinary), now using environment variables for security;
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    // Function to upload an image to Cloudinary

    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if(!localFilePath) return null; // if no file path is provided, return null
            const response = await cloudinary.uploader.upload(localFilePath, { 
            resource_type : "auto"
        })

        // file hase been uploaded successfully
        console.log("File uploaded successfully:", response.url);
        return response;

        }
        catch (error){
            fs.unLinkSynce(localFilePath); // delete the temporary file from local storage if upload fails
            return null;
        }
    }

    export {uploadOnCloudinary}
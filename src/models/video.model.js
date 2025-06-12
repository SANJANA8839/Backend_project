// Description: This file defines the Video model schema for storing video information in a MongoDB database using Mongoose.

import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({

    videoFile : {
        type : String,      // we will use cloudinary.com for storing our videos
        required : true,
    },
    thumbnail: {
        type: String,      // we will use cloudinary.com for storing our images
        required: true,
    },  
    title: {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    duration: {
        type : Number,
        required: true,
    },
    views : {
        type: Number,
        default : 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner :{
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    

}
)




export const Video = mongoose.model("Video", videoSchema);
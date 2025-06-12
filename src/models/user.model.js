// This file defines the User model for MongoDB using Mongoose.

import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({

    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        index : true,
        lowercase : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
    },
    fullname : {
        type : String,
        required : true,
        trim : true,
        index : true,
    },
    avatar : {
        type: String,      // we will use cloudinary.com for storing our images
        required : true,
    },
    coverImage : {
        type: String,      // we will use cloudinary.com for storing our images
    },
    watchHistory :[
        {
            type : Schema.Types.ObjectId,
            ref : "Video"
        }
    ],
    password : {
        type : String,
        required : [true, 'Password is required'],    
    },
    refreshToken: {
        type: String,
    },
   
},
{
    timestamps: true
})


export const User = mongoose.model("User", userSchema);
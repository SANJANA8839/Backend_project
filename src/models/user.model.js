// This file defines the User model for MongoDB using Mongoose.

import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
    fullName : {
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

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash("password", 10)
    next()  
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            username: this.username,    
            email: this.email,
            fullName : this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET, {
            expiresIn : ACCESS_TOKEN_EXPIRY 
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
      return jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET, {
            expiresIn : REFRESH_TOKEN_EXPIRY 
        }
    )
}

export const User = mongoose.model("User", userSchema);
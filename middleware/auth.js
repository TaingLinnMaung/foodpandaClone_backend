import ErrorHandler from "../utils/ErrorHandler.js";
import CatchAsyncError from "./catchAsyncError.js";
import jwt from "jsonwebtoken"
import dotEnv from "dotenv"
import userModel from "../models/user.model.js";
// import { redis } from "../config/redis.js";

//authenticated user
dotEnv.config()
export const isAuthenticated = CatchAsyncError(async (req,res,next) => {
    try {
        const access_token = req.cookies.access_token
        console.log(req.cookies)
       
        if(!access_token){
            return next(new ErrorHandler("Please Login To Access This Resources",400))
        }

        const decoded = jwt.verify(access_token,process.env.ACCESS_TOKEN)

        if(!decoded){
            return next(new ErrorHandler("access token is not valid",400))
        }

        // const user = await redis.get(decoded.id)
        const user = await userModel.findById(decoded.id)
        let userJsonString =JSON.stringify(user)
        req.user = JSON.parse(userJsonString)
        if(!user) {
            return next(new ErrorHandler("user not found",400))
        }
      

        next()

    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})

//validate user role

export const authorizeRoles = (...roles) => {
    return (req,res,next) => {
        console.log(req.user)
        if(!roles.includes(req.user?.role || "")){
            return next(new ErrorHandler(`Role:${req.user?.role} is not allowed to access this resources`,403))
        }
        next()
    }
}
import CatchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import categoryModel from "../models/category.model.js"
import restaurantModel from "../models/restaurant.model.js";
import mongoose from "mongoose";

//get all category by restaurant id
export const getCategoriesByRestaurantId = CatchAsyncError(async (req,res,next) => {
    try {
        const {id} = req.params
       
const objectId = new mongoose.Types.ObjectId(id)
        let data = await restaurantModel.findById(objectId).populate('categories')
        res.status(200).json({success:true,data:data.categories})
        console.log('hello')
    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})

export const createCategory = CatchAsyncError(async (req,res,next) => {
    try {
        const {title,description} = req.body
        let newCategory = await categoryModel.create({title,description})

        res.status(201).json({success:true,data:newCategory})

      
    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})
import CatchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import categoryModel from "../models/category.model.js"
import mongoose from "mongoose";

//get all category by restaurant id
export const getCategoriesByRestaurantId = CatchAsyncError(async (req,res,next) => {
    try {
        const {id} = req.params
       
const objectId = new mongoose.Types.ObjectId(id)
        let data = await categoryModel.find({restaurant_id:objectId})
        res.status(200).json({success:true,data})
        console.log('hello')
    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})

export const createCategoryByRestaurantId = CatchAsyncError(async (req,res,next) => {
    try {
        const {title,restaurant_id} = req.body
        let newCategory = await categoryModel.create({title,restaurant_id})

        res.status(201).json({success:true,data:newCategory})

      
    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})
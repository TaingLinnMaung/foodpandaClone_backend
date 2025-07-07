import mongoose from "mongoose";
import itemModel from "../models/item.model.js"
import CatchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";

//create
export const createItem = CatchAsyncError(async (req,res,next) => {
    try {
        const {name,categoryId,price,restaurantId,toping} = req.body 
              const image = req.file ? req.file.path : null; 
          const imagePublic_id = req.file?.filename
        if(!name){
            return next(new ErrorHandler('name is required!',400))
        }
        if(!categoryId){
            return next(new ErrorHandler('categoryId is required!',400))
        }
        if(!price){
            return next(new ErrorHandler('price is required!',400))
        }
        if(!restaurantId){
            return next(new ErrorHandler('restaurantId is required!',400))
        }
        
        let newItem = {name,categoryId,price,restaurantId,toping:JSON.parse(toping),image,imagePublic_id}
        let data = await itemModel.create(newItem)

        res.status(201).json({success:true,message:'new Item created',data})

    } catch (error) {
        return next(new ErrorHandler(error.message,500))
    }
})

//get All
export const getAllItems = CatchAsyncError(async (req,res,next) => {
    try {
        let data = await itemModel.find()
        res.status(200).json({success:true,data})
    } catch (error) {
        return next(new ErrorHandler(error.message,500))
    }
})

//get by Id
export const getById = CatchAsyncError(async (req,res,next) => {
    try {
        const {id} = req.params

        let data = await itemModel.findById(id)
        res.status(200).json({success:true,data})
    } catch (error) {
        return next(new ErrorHandler(error.message,500))
    }
})

//delete
export const deleteItem = CatchAsyncError(async (req,res,next) => {
    try {
        const {id} = req?.params
        
        let item = await itemModel.findByIdAndDelete(id)

        res.status(200).json({success:true,message:'item is successfully deleted',data:item})
    } catch (error) {
        return next(new ErrorHandler(error.message,500))
    }
})
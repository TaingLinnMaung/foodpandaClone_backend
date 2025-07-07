import CatchAsyncError from "../middleware/catchAsyncError.js";
import Restaurant from "../models/restaurant.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";

export const createRestaurant =CatchAsyncError( async (req,res,next) => {
    try {
        console.log(req.cookies)
        const {name,categories} = req.body
          const logo = req.file ? req.file.path : null; 
          const logoPublic_id = req.file.filename
          console.log(req.file)
          let createData = {
            name,
            
            logo,
            logoPublic_id
        }
        if(categories){
          createData.categories = JSON.parse(categories) 
        }
        const newRestaurant = await Restaurant.create(createData)

        return res.status(201).json({
            success:true,
            message:"new Restaurant created",
            data:newRestaurant
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }
})

export const getAllRestaurant = CatchAsyncError(async (req,res,next) => {
    try {
        const data = await Restaurant.find().populate('categories')
        res.status(200).json({success:true,data})
    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})

export const deleteRestaurant = CatchAsyncError(async (req, res, next) => {
  try {
    const { id } = req.params;

    // This gives you the deleted document
    const restaurant = await Restaurant.findByIdAndDelete(id);
    console.log(restaurant)
    if (!restaurant) {
      return next(new ErrorHandler('Restaurant not found', 404));
    }

    // Delete logo from Cloudinary
    if (restaurant.logoPublic_id) {
      await cloudinary.uploader.destroy(restaurant.logoPublic_id);
    }

    res.status(200).json({
      success: true,
      message: 'Restaurant and associated image deleted successfully',
    });

  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

export const addNewCategoryToRestaurant = CatchAsyncError(async (req,res,next) => {
  try {
    const {categories,restaurant_id} = req.body
    let restaurant = await Restaurant.findById(restaurant_id)
    let existingCategories = restaurant.categories.map(id => id.toString())
    let mixedCategoriesSet = new Set([...categories,...existingCategories])

    let mixedCategories = [...mixedCategoriesSet]
    let objectArray = mixedCategories.map(id => new mongoose.Types.ObjectId(id))

    let data = await Restaurant.findByIdAndUpdate(restaurant_id,{categories:objectArray},{new:true})

    return res.status(200).json({success:true,data})

  } catch (error) {
    return next(new ErrorHandler(error.message,400))
  }
})

export const getRestaurantById = CatchAsyncError(async (req,res,next) => {
  try {
    let {id} = req.params
    const objectId = new mongoose.Types.ObjectId(id)
    let data = await Restaurant.findById(objectId).populate('categories')

    return res.status(200).json({success:true,data})

  } catch (error) {
    return next(new ErrorHandler(error.message,400))
  }
})

export const getRestaurantByCategory = CatchAsyncError(async (req,res,next) => {
  try {
    const {id} = req.params
    let objectId = new mongoose.Types.ObjectId(id)

    const data = await Restaurant.find({categories:objectId}).populate('categories')

    res.status(200).json({success:true,data})
  } catch (error) {
    return next(new ErrorHandler(error.message,400))
  }
})
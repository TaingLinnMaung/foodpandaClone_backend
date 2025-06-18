import CatchAsyncError from "../middleware/catchAsyncError.js";
import Restaurant from "../models/restaurant.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import cloudinary from "../config/cloudinary.js";

export const createRestaurant =CatchAsyncError( async (req,res,next) => {
    try {
        console.log(req.cookies)
        const {name,address} = req.body
          const logo = req.file ? req.file.path : null; 
          const logoPublic_id = req.file.filename
          console.log(req.file)
        const newRestaurant = await Restaurant.create({
            name,
            address ,
            logo,
            logoPublic_id
        })

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
        const data = await Restaurant.find()
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

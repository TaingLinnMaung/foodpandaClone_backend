import CatchAsyncError from "../middleware/catchAsyncError.js";
import Restaurant from "../models/restaurant.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const createRestaurant =CatchAsyncError( async (req,res,next) => {
    try {
        console.log(req.cookies)
        const {name,address} = req.body
        const newRestaurant = await Restaurant.create({
            name,
            address
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
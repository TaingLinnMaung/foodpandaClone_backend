import express from "express"
import dotEnv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import {ErrorMiddleware} from "./middleware/error.js"
import userRouter from "./routes/user.route.js"
import restaurantRouter from "./routes/restaurant.route.js"
import categoryRoute from "./routes/category.route.js"
import { sortFunction } from "./test.js"

export const app = express()

dotEnv.config()

//body parser
app.use(express.json({limit:"50mb"}))

//cookie parser
app.use(cookieParser())

//cors
// app.use(cors({
//     origin:process.env.ORIGIN
// }))

app.use(cors())


app.use("/api",userRouter)
app.use("/api",restaurantRouter)
app.use("/api",categoryRoute)

//api
app.get("/api/test",sortFunction)

app.all("*",(req,res,next) => {
    const err = new Error(`Route ${req.originalUrl} is not Found! `)
    err.statusCode = 404
    next(err)
})

app.use(ErrorMiddleware)
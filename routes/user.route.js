import express from "express"
import * as userController from "../controllers/user.controller.js"
import {  isAuthenticated } from "../middleware/auth.js"

const userRouter = express.Router()

userRouter.get('/auth/users',userController.getAllUsers)

userRouter.post('/auth/register',userController.registrationUser)

userRouter.post('/auth/activate-user',userController.activateUser)

userRouter.post('/auth/login',userController.loginUser)

userRouter.post('/auth/social-auth',userController.socialAuth)

userRouter.get('/auth/refreshtoken',userController.updateAccessToken)

userRouter.get('/auth/logout',isAuthenticated,userController.logoutUser)

userRouter.get('/auth/info',isAuthenticated,userController.getUserInfo)

userRouter.put('/auth/update-info',isAuthenticated,userController.updateUser)

userRouter.put('/auth/update-password',isAuthenticated,userController.updatePassword)

export default userRouter
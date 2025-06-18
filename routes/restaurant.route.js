import {Router} from "express"
import * as restaurantController from "../controllers/restaurant.controller.js"
import { authorizeRoles ,isAuthenticated} from "../middleware/auth.js"
import restaurantUpload from "../multer/restaurant.multer.js"

const router = Router()

router.post('/restaurant/create',isAuthenticated,authorizeRoles('admin') ,restaurantUpload.single('logo'),restaurantController.createRestaurant)

router.get('/restaurant/all',restaurantController.getAllRestaurant)

router.get('/restaurant/delete/:id',restaurantController.deleteRestaurant)

export default router;
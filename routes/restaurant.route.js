import {Router} from "express"
import * as restaurantController from "../controllers/restaurant.controller.js"
import { authorizeRoles ,isAuthenticated} from "../middleware/auth.js"
import upload from "../multer/multer.js"

const router = Router()

router.post('/restaurant/create',isAuthenticated,authorizeRoles('admin') ,upload.single('logo'),restaurantController.createRestaurant)

router.get('/restaurant/all',restaurantController.getAllRestaurant)

router.get('/restaurant/delete/:id',restaurantController.deleteRestaurant)

router.put('/restaurant/update',restaurantController.addNewCategoryToRestaurant)

router.get('/restaurant/:id',restaurantController.getRestaurantById)

router.get('/restaurant/getByCategory/:id',restaurantController.getRestaurantByCategory)

export default router;
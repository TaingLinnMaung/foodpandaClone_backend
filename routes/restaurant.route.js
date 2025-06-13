import {Router} from "express"
import { createRestaurant } from "../controllers/restaurant.controller.js"
import { authorizeRoles ,isAuthenticated} from "../middleware/auth.js"

const router = Router()

router.post('/restaurant/create',isAuthenticated,authorizeRoles('admin') ,createRestaurant)

export default router;
import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js"

const router = Router()

router.get('/category/:id',categoryController.getCategoriesByRestaurantId)

router.post('/category/create',categoryController.createCategoryByRestaurantId)

export default router;
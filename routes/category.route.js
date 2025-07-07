import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js"

const router = Router()

router.get('/category/:id/restaurant',categoryController.getCategoriesByRestaurantId)

router.post('/category/create',categoryController.createCategory)

router.get('/category/all',categoryController.getAllCategory)

router.delete('/category/delete/:id',categoryController.deleteCategory)

export default router;
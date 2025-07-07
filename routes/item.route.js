import * as itemController from "../controllers/item.controller.js"
import { Router } from "express"
import { authorizeRoles ,isAuthenticated} from "../middleware/auth.js"
import upload from "../multer/multer.js"

const router = Router()

router.post('/item/create',isAuthenticated,authorizeRoles('admin'),upload.single('image') ,itemController.createItem)

router.get('/item/all',isAuthenticated,itemController.getAllItems)

router.get('/item/getById/:id',itemController.getById)

router.delete('/item/delete/:id',itemController.deleteItem)

export default router;
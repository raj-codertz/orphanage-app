import { Router } from 'express'
import {getAppStats, getCurrentUser, updateUser} from '../controllers/userController.js'
import { authorizePermissions } from '../middleware/authMiddleware.js'
const router = Router()

router.get('/current-user', getCurrentUser)
router.patch('/update-user', updateUser)
router.get('/admin/app-stats', authorizePermissions('admin'), getAppStats)


export default router
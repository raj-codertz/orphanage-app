import { Router } from "express";
const router = Router()

import {
    createOrphanage,
    getAllOrphanages,
    getOrphanage,
    deleteOrphanage,
    editOrphanage,
} from '../controllers/organizationController.js'

import { validateIdParam, validationOrphanageInput } from "../middleware/validationMiddleware.js";

router.route('/').get(getAllOrphanages).post(validationOrphanageInput, createOrphanage)
router.route('/:id').get(validateIdParam, getOrphanage).patch(validationOrphanageInput, validateIdParam,  editOrphanage).delete(validateIdParam, deleteOrphanage)

export default router
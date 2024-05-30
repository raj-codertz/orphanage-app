import { Router } from "express";
const router = Router()

import { AllOrphanages } from "../controllers/exploreController.js";


router.get('/orphanages', AllOrphanages)

export default router
import { Router } from "express";
import { getRole } from "../controllers/roleController.js";

const router = Router();


router.get("/", getRole);

export default router; 

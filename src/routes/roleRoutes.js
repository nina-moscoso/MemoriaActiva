import { Router } from "express";

import { createRole, deleteRole, getRole, getRoles, updateRole } from "../controllers/roleController.js";

const router = Router();

router.get("/role/:id", getRole)
router.get('/role', getRoles)
router.post('/role', createRole)
router.put('/role/:id', updateRole)
router.delete('/role/:id', deleteRole)

export default router; 

import { Router } from "express";

import {getAlert,updateAlert,deleteAlert,createAlert,getAlerts} from "../controllers/alertsController.js";


const router = Router();

router.get("/alert/:id", getAlert)
router.get('/alert', getAlerts)
router.post('/alert', createAlert)
router.put('/alert/:id', updateAlert)
router.delete('/alert/:id', deleteAlert)

export default router; 

import {Router} from 'express'
import {createPqrs,getPqrsById,getAllPqrs,deletePqrs,updatePqrs} from '../controllers/pqrsController.js'

const router = Router();

router.get('/pqrs', getAllPqrs)

router.get('/pqrs/:id',getPqrsById )

router.post('/pqrs', createPqrs)

router.put('/pqrs/:id', updatePqrs)

router.delete('/pqrs/:id', deletePqrs)



export default router;

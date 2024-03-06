import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import '../database/db.js'


//importaciones

//andrea




//amparo

import user from '../routes/userRoutes.js'
import role from "../routes/roleRoutes.js";


//maia




//ronald




//quiñones




//nilson







const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'));

// Routes

//andrea




//amparo


app.use('/api', user);
app.use('/api', role)




//maia




//ronald




//quiñones




//nilson


export default app;
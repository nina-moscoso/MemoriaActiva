import mongoose from 'mongoose'


import {MONGODB_URI} from '../config/app.config.js'



(async()=>{
    try {
        
        mongoose.set("strictQuery",true)
        const db = await mongoose.connect(MONGODB_URI)
        console.log('Database is connected to:',db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()

const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    tipo: {
        type: String,
        required: true,
        enum: ['manual', 'automática'],
    },
    descripcion: {
        type: String,
        trim: true,
    },
});

const Activity = mongoose.model('Activity', activitySchema);

export default activitySchema; 

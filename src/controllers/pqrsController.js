import PqrsModel from '../models/pqrsModel.js'


// Get all pqrs
export const getAllPqrs = async(req, res) => {
    try {
        const pqrs = await PqrsModel.find();
        if(!pqrs){
            return res.status(404).json({message:"No hay pqrs"})
        }
        if (pqrs.length > 0 ) {
            return res.status(200).json({message:"pqrs encontradas",pqrs});
        }else{
            return res.status(404).json({message:"No se encontraron pqrs"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error en el servidor"})
    }
};

// Get a single pqrs by ID
export const getPqrsById = async(req,res)=>{
    try {
        const {id} = req.params
        const pqrs = await PqrsModel.findById(id);
        if(!pqrs){
            return res.status(404).json({message:"No hay pqrs con el id suministrado"})
        }
        res.status(200).json({message:"pqrs encontrada",pqrs});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error en el servidor"})
    }
}


// Create a new pqrs
export const createPqrs = async(req,res)=>{
    try {
        const data = req.body
        const newPqrs = new PqrsModel(data)
        await newPqrs.save()
        if (!newPqrs) {
            return res.status(404).json({message:"No se pudo crear la pqrs"})
        }
        res.status(201).json({message:"pqrs creada con exito",newPqrs})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error en el servidor"})
    }
}

// Update an existing pqrs
export const updatePqrs = async(req,res) =>{
    try {
        const {id} = req.params;
        const data = req.body;
        const pqrs = await PqrsModel.findByIdAndUpdate(id,{$set:{...data}},{new:true});
        if(!pqrs){
            return res.status(404).json({message:"No hay pqrs con el id suministrado"})
        }
        res.status(200).json({message:"pqrs actualizada",pqrs})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error en el servidor"})    
    }
}


// Delete a pqrs
export const deletePqrs = async(req,res) =>{
    try {
        const {id} = req.params;
        const pqrs = await PqrsModel.findByIdAndDelete(id)
        if(!pqrs){
            return res.status(404).json({message:"No hay pqrs con el id suministrado"})
        }
        res.status(200).json({message:"pqrs eliminada",pqrs})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error en el servidor"})
    }
}
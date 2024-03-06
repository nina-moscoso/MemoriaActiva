import AlertModel from "../models/alertsModel.js";

//metodo para crear un alerta
export const createAlert = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const alert = new AlertModel(data)
        await alert.save()
        res.status(200).json({ message: 'alert created successfully', alert });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to register alert", error: error });
    }
}

//encontrar una alerta atraves del id
export const getAlert = async (req, res) => {
    try {
        const { id } = req.params;
        const alertsFound = await AlertModel.findById(id);
        if (!alertsFound) {
            res.status(404).json({ message: "Alert not found", alertsFound });
        }
        res.status(200).json({ message: "Alert found", alertsFound });
    } catch (error) {
        res.status(500).json({ message: "unable to get Alerts", error });
    }
}

//encontrar alerta
export const getAlerts = async (req, res) => {
    try {
        const alertsFound = await AlertModel.find()
        if (!alertsFound) {
            res.status(404).json({ message: "Alert empty", alertsFound });
        }
        res.status(200).json({ message: "Alerts found", rolesFound });

    } catch (error) {
        res.status(500).json({ message: "unable to get Alerts", error });
    }
}

//para actulizar datos atraves de id roles
export const updateAlert = async (req, res) => {
    try {
        const data = req.body
        const id = req.params.id
        const updatedAlert= await AlertModel.findByIdAndUpdate(id, { $set: { ...data } })
        res.status(200).json({ message: 'User updated successfully', updatedAlert });

    } catch (error) {
        res.status(500).json({ message: "unable to update user", error });
    }
}

//para eliminar datos atraves de id role
export const deleteAlert = async (req, res) => {
    try {
        const id = req.params.id
        const deletedAlert = await AlertModel.findByIdAndDelete(id)
        res.status(200).json({ message: 'User deleted successfully', deletedAlert });
    } catch (error) {
        res.status(500).json({ message: "unable to delete user", error });
    }
}
import activitiesModels from '../models/activitiesModel.js'


export const listaAcivite = async (req, res) => {
    try {
        const activities = await Activity.find({});
        res.status(200).json(activities);
    } catch (err) {
        res.status(500).send(err);
    }
};
export const createActivity = async (req, res) => {
    try {
        const activity = new Activity(req.body);
        const savedActivity = await activity.save();
        res.status(201).json(savedActivity);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).send('Actividad no encontrada');
        }
        res.status(200).json(activity);
    } catch (err) {
        res.status(404).send(err);
    }
};


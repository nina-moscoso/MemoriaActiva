import RoleModel from "../models/roleModel.js";

//metodo para crear un rol
export const createRole = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        const role = new RoleModel(data)
        await role.save()
        res.status(200).json({ message: 'role created successfully', role });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to register roles", error: error });
    }
}

//encontrarun rol atraves del id
export const getRole = async (req, res) => {
    try {
        const { id } = req.params;
        const rolesFound = await RoleModel.findById(id);
        if (!rolesFound) {
            res.status(404).json({ message: "Roles not found", rolesFound });
        }
        res.status(200).json({ message: "Roles found", rolesFound });
    } catch (error) {
        res.status(500).json({ message: "unable to get roles", error });
    }
}

//encontrar roles 
export const getRoles = async (req, res) => {
    try {
        const rolesFound = await RoleModel.find()
        if (!rolesFound) {
            res.status(404).json({ message: "Roles empty", rolesFound });
        }
        res.status(200).json({ message: "Roles found", rolesFound });

    } catch (error) {
        res.status(500).json({ message: "unable to get roles", error });
    }
}

//para actulizar datos atraves de id roles
export const updateRole = async (req, res) => {
    try {
        const data = req.body
        const id = req.params.id
        const updatedRole = await RoleModel.findByIdAndUpdate(id, { $set: { ...data } })
        res.status(200).json({ message: 'User updated successfully', updatedRole });

    } catch (error) {
        res.status(500).json({ message: "unable to update user", error });
    }
}

//para eliminar datos atraves de id role
export const deleteRole = async (req, res) => {
    try {
        const id = req.params.id
        const deletedRole = await RoleModel.findByIdAndDelete(id)
        res.status(200).json({ message: 'User deleted successfully', deletedRole });
    } catch (error) {
        res.status(500).json({ message: "unable to delete user", error });
    }
}
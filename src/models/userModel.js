import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";
import roleModel from "./roleModel.js";

const userShema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    tipoIdentificacion: { type: String, required: true },
    numeroIdentificacion: { type: String, required: true, unique: true },
    telefono: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    fechaNacimiento: { type: Date, required: true },
    direccion: { type: String, required: false },
    contrasena: { type: String, required: true },
    fotoPerfil: { type: String, required: false },
    rol: { type: String, required: true, ref: roleModel },
    certificado: { type: String, required: false },
    estado: {
        activo: { type: Boolean, required: true, default: true },
        paciente: { type: Boolean, required: true },
        familiar: { type: Boolean, required: true },
        cuidador: { type: Boolean, required: true },
        proceso: { type: Boolean, required: true },
        finalizar: { type: Boolean, required: true }

    },
}, {
    versionKey: false,
    timestamps: true
})

userShema.static.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
}

userShema.methods.comparePassword = async function (password, candidatePassword) {
    try {
        return await bcryptjs.compare(password, candidatePassword);
    } catch (error) {
        throw error;
    }
}

export default model("user", userShema);
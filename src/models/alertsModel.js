
import { Schema, model } from "mongoose";

const alertsShema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    hora: { type: Date, required: true }
}, {
    versionKey: false,
    timestamps: true,
})

export default model("alerts", alertsShema);

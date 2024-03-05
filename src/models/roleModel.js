import { Schema, model } from "mongoose";

const roleShema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
})

export default model("role", roleShema);


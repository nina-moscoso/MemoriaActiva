import { Schema, model } from "mongoose";
import User from './userModel.js'

const pqrsSchema = new Schema(
  {
    type: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref:User },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);



export default model('Pqrs',pqrsSchema);
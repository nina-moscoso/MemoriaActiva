import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config/app.config.js";

export const validateToken = async (req, res, next) => {
  try {
    const token = req.headers["access-token"];
    if (!token) {
      return res.status(400).json("No existe el token");
    }

    const decodeToken = jwt.verify(token, SECRET_JWT);
    console.log(decodeToken)
    req.idUsuario = decodeToken.id;
    next();
  } catch (error) {
    return res.status(400).json("!No autorizado!")
  }
};

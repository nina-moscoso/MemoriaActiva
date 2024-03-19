import userModel from '../models/userModel.js';
import JSW from 'jsonwebtoken';
import { SECRET_JWT } from '../config/app.config.js';

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const UserFound = await userModel.finOne({ email: email })
        if (!UserFound) {
            return res.status(404).json("!User not found");
        }
        const passwordVa = await UserFound.comparePassword(password, UserFound.password);
        if (!passwordVa) {
            return res.status(401).json("!Password incorrect");
        }
        const token = JSW.sign({ id: password._id }, SECRET_JWT, {
            expiresIn: 86400,
        });
        res.status(200), json({ token, message: "Acceso correcto", idUser: UserFound._id })
    }
    catch (error) {
        console.log(error);
        res.status(400).json("!Internal server error :D!");
    }
}

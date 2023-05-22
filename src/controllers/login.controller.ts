import { Response, Request } from "express";
import bcryptjs from 'bcryptjs'
import Usuarios from "../models/user.model";
import loginService from "../services/login/login.service";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, senha } = req.body
        const token = await loginService(email, senha)
        return res.status(200).send({ token: token })

    } catch (error: any) {
        return res.status(400).send(error?.message)
    }
}

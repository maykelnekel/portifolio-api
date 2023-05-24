import { Response, Request } from "express";
import loginService from "../services/login/login.service";

export const login = async (req: Request, res: Response): Promise<Response<{ token: string }>> => {
    const { email, senha } = req.body
    const token = await loginService(email, senha)
    return res.status(200).send({ token: token })
}

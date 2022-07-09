import { Request, Response } from "express";
import atualizarPerfilService from "../services/perfil/atualizarPerfil.service";
import listarPerfilService from "../services/perfil/listarPerfil.service";

export const listarPerfilController = async (req: Request, res: Response) => {
    try {
        const id = req.user._id

        const usuario = await listarPerfilService(id)
        return res.status(200).json(usuario)

    } catch (error: any) {
        return res.status(400).json({message: error.message})
    }
}

export const atualizarPerfilController = async (req: Request, res: Response) => {
    try {
        const id = req.user._id
        const data = req.body
        const usuario = await atualizarPerfilService(id, data)

        return res.status(200).send(usuario)
    } catch (error: any) {
        return res.status(400).send({message: error.message})
    }
}
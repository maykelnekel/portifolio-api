import { Request, Response } from "express";
import serviceAtualizarPerfil from "../services/perfil/atualizarPerfil.service";
import pegarUsuarios from "../services/perfil/pegarUsuarios";
import pegarUsuarioUnico from "../services/perfil/pegarUsuarioUnico.service";

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        const usuario = await pegarUsuarios()

        return res.status(200).send(usuario)
    } catch (error: any) {
        return res.status(400).send({message: error.message})
    }
}

export const listarPerfil = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId

        const usuario = await pegarUsuarioUnico(id)
        return res.status(200).send(usuario)

    } catch (error: any) {
        return res.status(400).send({message: error.message})
    }
}

export const atualizarPerfil = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId
        const data = req.body
        const usuario = await serviceAtualizarPerfil(id, data)

        return res.status(200).send(usuario)
    } catch (error: any) {
        return res.status(400).send({message: error.message})
    }
}
import { Request, Response } from "express";
import atualizarMidiaService from "../services/midias/atualizarMidia.service";
import deletarMidiaService from "../services/midias/deletarMidia.service";
import listarTodasMidiasService from "../services/midias/listarTodasMidias.service";
import listarUnicaMidiaService from "../services/midias/listarUnicaMidia.service";
import registrarUnicaMidiaService from "../services/midias/registrarMidia.service";

export const registrarMidiaController = async (req:Request, res: Response) => {
    try {
        const data = req.body
        const userId = req.user._id
        const midia = await registrarUnicaMidiaService(userId, data)

        res.status(201).json(midia)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const listarTodasMidiasController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const midias = await listarTodasMidiasService(userId)

        res.status(200).json(midias)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const listarUnicaMidiaController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const midiaId = req.params.id

        const midia = await listarUnicaMidiaService(userId, midiaId)

        res.status(200).json(midia)

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const deletarMidiaController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const midiaId = req.params.id

        const deletado = await deletarMidiaService(userId, midiaId)

        return res.status(204).json(deletado)

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const atualizarMidiaController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const midiaId = req.params.id
        const data = req.body

        const dadoAtualizado = await atualizarMidiaService(userId, midiaId, data)

        return res.status(200).json(dadoAtualizado)

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}
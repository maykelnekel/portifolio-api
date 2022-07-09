import { Request, Response } from "express";
import atualizarCategoriaService from "../services/categorias/atualizarCategoria.service";
import deletarCategoriaService from "../services/categorias/deletarCategoria.service";
import listarTodasCategoriasService from "../services/categorias/listarTodasCategorias.service";
import listarUnicaCategoriaService from "../services/categorias/listarUnicaCategoria.service";
import registrarUnicaCategoriaService from "../services/categorias/registrarCategoria.service";

export const registrarCategoriaController = async (req:Request, res: Response) => {
    try {
        const data = req.body
        const userId = req.user._id
        const categoria = await registrarUnicaCategoriaService(userId, data)

        res.status(201).json(categoria)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const listarTodasCategoriasController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const categorias = await listarTodasCategoriasService(userId)

        res.status(200).json(categorias)
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const listarUnicaCategoriaController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const categoriaId = req.params.id

        const categoria = await listarUnicaCategoriaService(userId, categoriaId)

        res.status(200).json(categoria)

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const deletarCategoriaController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const CategoriaId = req.params.id

        const deletado = await deletarCategoriaService(userId, CategoriaId)

        return res.status(204).json(deletado)

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}

export const atualizarCategoriaController = async (req:Request, res: Response) => {
    try {
        const userId = req.user._id
        const categoriaId = req.params.id
        const data = req.body

        const dadoAtualizado = await atualizarCategoriaService(userId, categoriaId, data)

        return res.status(200).json(dadoAtualizado)

    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
}
import { Request, Response } from "express";
import atualizarCategoriaService from "../services/categorias/atualizarCategoria.service";
import deletarCategoriaService from "../services/categorias/deletarCategoria.service";
import listarTodasCategoriasService from "../services/categorias/listarTodasCategorias.service";
import listarUnicaCategoriaService from "../services/categorias/listarUnicaCategoria.service";
import registrarUnicaCategoriaService from "../services/categorias/registrarCategoria.service";
import { iCategorias } from "../interfaces/interfaces";

export const registrarCategoriaController = async (
  req: Request,
  res: Response
): Promise<Response<iCategorias>> => {
  const data = req.body;
  const userId = req.user._id;
  const categoria = await registrarUnicaCategoriaService(userId, data);

  return res.status(201).json(categoria);
};

export const listarTodasCategoriasController = async (
  req: Request,
  res: Response
): Promise<Response<Array<iCategorias>>> => {
  const userId = req.user._id;
  const categorias = await listarTodasCategoriasService(userId);

  return res.status(200).json(categorias);
};

export const listarUnicaCategoriaController = async (
  req: Request,
  res: Response
): Promise<Response<iCategorias>> => {
  const userId = req.user._id;
  const categoriaId = req.params.id;

  const categoria = await listarUnicaCategoriaService(userId, categoriaId);

  return res.status(200).json(categoria);
};

export const deletarCategoriaController = async (
  req: Request,
  res: Response
): Promise<Response<void>> => {
  const userId = req.user._id;
  const CategoriaId = req.params.id;

  await deletarCategoriaService(userId, CategoriaId);

  return res.status(204).send();
};

export const atualizarCategoriaController = async (
  req: Request,
  res: Response
): Promise<Response<iCategorias>> => {
  const userId = req.user._id;
  const categoriaId = req.params.id;
  const data = req.body;

  const dadoAtualizado = await atualizarCategoriaService(
    userId,
    categoriaId,
    data
  );

  return res.status(200).json(dadoAtualizado);
};

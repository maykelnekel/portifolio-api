import { Request, Response } from "express";
import atualizarFotoService from "../services/fotos/atualizarFoto.service";
import deletarFotoService from "../services/fotos/deletarFoto.service";
import listarTodasFotosService from "../services/fotos/listarTodasFotos.service";
import listarUnicaFotoService from "../services/fotos/listarUnicaFoto.service";
import registrarUnicaFotoService from "../services/fotos/registrarFoto.service";

export const registrarFotoController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.user._id;
  const fotos = await registrarUnicaFotoService(id, data);

  res.status(201).json(fotos);
};

export const listarTodasFotosController = async (
  req: Request,
  res: Response
) => {
  const id = req.user._id;
  const fotos = await listarTodasFotosService(id);

  res.status(200).json(fotos);
};

export const listarUnicaFotoController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user._id;
  const fotoId = req.params.id;

  const foto = await listarUnicaFotoService(userId, fotoId);

  res.status(200).json(foto);
};

export const deletarFotoController = async (req: Request, res: Response) => {
  const userId = req.user._id;
  const fotoId = req.params.id;

  const deletado = await deletarFotoService(userId, fotoId);

  return res.status(204).json(deletado);
};

export const atualizarFotoController = async (req: Request, res: Response) => {
  const userId = req.user._id;
  const fotoId = req.params.id;
  const data = req.body;

  const dadoAtualizado = await atualizarFotoService(userId, fotoId, data);

  return res.status(200).json(dadoAtualizado);
};

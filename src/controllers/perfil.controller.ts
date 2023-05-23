import { Request, Response } from "express";
import atualizarPerfilService from "../services/perfil/atualizarPerfil.service";
import listarPerfilService from "../services/perfil/listarPerfil.service";

export const listarPerfilController = async (req: Request, res: Response) => {
  const id = req.user._id;

  const usuario = await listarPerfilService(id);
  return res.status(200).json(usuario);
};

export const atualizarPerfilController = async (
  req: Request,
  res: Response
) => {
  const id = req.user._id;
  const data = req.body;
  const usuario = await atualizarPerfilService(id, data);

  return res.status(200).send(usuario);
};

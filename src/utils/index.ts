import bcryptjs from "bcryptjs";
import { iUser } from "../interfaces/interfaces";
import Usuarios from "../models/user.model";

const hashSenha = (senha: String): string => {
  const hash = bcryptjs.hashSync(senha as string, 10);
  return hash;
};

export const criaUsuario = async (usuario: iUser) => {
  const user = await Usuarios.create(usuario);
  return user;
};

export const atualizaSenha = async (id: string, senha: string) => {
  const senhaHash = hashSenha(senha);
  const userAtt = await Usuarios.findByIdAndUpdate(id, { senha: senhaHash });
  return userAtt;
};

export const jessica = {
  login: "jehmassuquetto",
  email: "jessicamassuquetto@gmail.com",
  telefone: "(41)99999-9999",
  senha: hashSenha("123456"),
  sobreMim: "algo sobre mim",
  nome: "Jessica",
  sobrenome: "Massuquetto",
};

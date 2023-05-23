import mongoose from "mongoose";
import { iUser } from "../interfaces/interfaces";

const usuarioSchema = new mongoose.Schema<iUser>({
  login: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  senha: { type: String, required: true },
  sobreMim: { type: String, required: true },
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  midias: [
    {
      nome: String,
      usuario: String,
      link: String,
    },
  ],
  fotos: [
    {
      link: String,
      descricao: String,
      categoria: String,
    },
  ],
  categorias: [
    {
      categoria: String,
    },
  ],
});

export default usuarioSchema;

import mongoose from "mongoose";
import { iUser } from "../interfaces/interfaces";

const UsuarioSchema = new mongoose.Schema<iUser>({
    login: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    senha: { type: String, required: true },
    sobreMim: { type: String, required: true },
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    fotos: [{
        nome: String,
        usuario: String,
        link: String,
    }],
    midias: [{
        link: String,
        descricao: String,
        categoria: String
    }],
    categorias: [String],
})

export default UsuarioSchema
import { iUser } from "../../interfaces/interfaces"
import Usuarios from "../../models/user.model"
import hashSenha from "./hashSenha.service"

export const jessica = {
    login: "jehmassuquetto",
    email: "jessicamassuquetto@gmail.com",
    telefone: "(41)99999-9999",
    senha: hashSenha('123456'),
    sobreMim: "algo sobre mim",
    nome: "Jessica",
    sobrenome: "Massuquetto",
}

const criaUsuario = async  (usuario: iUser) => await Usuarios.create(usuario)

export default criaUsuario
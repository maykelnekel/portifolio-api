import bcrypt from "bcrypt"
import { iUser } from "../interfaces/interfaces"
import Usuarios from "../models/user.model"
import hashSenha from "../services/perfil/hashSenha.service"

export const jessica = {
    login: "jehmassuquetto",
    email: "jessicamassuquetto@gmail.com",
    telefone: "(41)99999-9999",
    senha: hashSenha('123456'),
    sobreMim: "algo sobre mim",
    nome: "Jessica",
    sobrenome: "Massuquetto",
}

export const criaUsuario = async  (usuario: iUser) => await Usuarios.create(usuario)

export const atualizaSenha = async (id: string, senha: string) => {
    const senhaHash = await bcrypt.hash(senha, 11)
    const userAtt = await Usuarios.findByIdAndUpdate(id, {senha: senhaHash})
    return userAtt
}


import mongoose from "mongoose"
import { iUser } from "../interfaces/interfaces";
import UsuarioSchema from "../schemas/usuario.schema"


const Usuarios = mongoose.model("Usuarios", UsuarioSchema);

export default Usuarios

// export const jessica = {
//     login: "jehmassuquetto",
//     email: "jessicamassuquetto@gmail.com",
//     telefone: "(41) 99999-9999",
//     senha: "teste",
//     sobreMim: "algo sobre mim",
//     nome: "Jessica",
//     sobrenome: "Massuquetto",
// }

// export const criaUsuario = async  (usuario: iUser) => await Usuarios.create(usuario)

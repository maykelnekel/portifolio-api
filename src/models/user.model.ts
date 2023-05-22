import mongoose from "mongoose"
import UsuarioSchema from "../schemas/usuario.schema"


const Usuarios = mongoose.model("usuarios", UsuarioSchema);

export default Usuarios
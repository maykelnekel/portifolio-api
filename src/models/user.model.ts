import mongoose from "mongoose"
import UsuarioSchema from "../schemas/usuario.schema"


const Usuarios = mongoose.model("Usuarios", UsuarioSchema);

export default Usuarios
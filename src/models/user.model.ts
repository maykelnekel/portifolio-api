import mongoose, { Model } from "mongoose";
import usuarioSchema from "../schemas/usuario.schema";
import { iUser } from "../interfaces/interfaces";

const Usuarios: Model<iUser> = mongoose.model("usuarios", usuarioSchema);

export default Usuarios;

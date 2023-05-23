import AppError from "../../errors/appError";
import { iUser } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const listarPerfilService = async (
  userId: string
): Promise<iUser | AppError> => {
  const usuario = await Usuarios.findById(userId);
  if (!usuario) {
    throw new AppError(404, "Usuário não encontrado");
  }
  return usuario;
};

export default listarPerfilService;

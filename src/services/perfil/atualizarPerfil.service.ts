import AppError from "../../errors/appError";
import { iUser } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const atualizarPerfilService = async (
  userId: string,
  data: object
): Promise<iUser | AppError> => {
  const updateOptions = {
    new: false,
    runValidators: true,
  };

  const usuario = await Usuarios.findByIdAndUpdate(userId, data, updateOptions);

  if (!usuario) {
    throw new AppError(404, "Usuário não encontrado");
  }

  return usuario;
};
export default atualizarPerfilService;

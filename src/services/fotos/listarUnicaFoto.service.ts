import AppError from "../../errors/appError";
import { iFotos } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const listarUnicaFotoService = async (
  userId: string,
  fotoId: string
): Promise<iFotos | AppError> => {
  const user = await Usuarios.findById(userId);
  const fotos: iFotos[] = user?.fotos as iFotos[];
  const foto = fotos.find((item) => item._id?.valueOf() === fotoId);

  if (!foto) {
    throw new AppError(404, "Foto não encontrada");
  }
  return foto;
};

export default listarUnicaFotoService;

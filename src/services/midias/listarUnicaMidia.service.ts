import AppError from "../../errors/appError";
import { iMidias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const listarUnicaMidiaService = async (
  userId: string,
  midiaId: string
): Promise<iMidias | AppError> => {
  const user = await Usuarios.findById(userId);
  const midias: iMidias[] = user?.midias as iMidias[];
  const midia = midias.find((item) => item._id?.valueOf() === midiaId);

  if (!midia) {
    throw new AppError(404, "Rede social não encontrada");
  }
  return midia;
};

export default listarUnicaMidiaService;

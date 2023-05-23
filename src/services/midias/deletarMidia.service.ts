import AppError from "../../errors/appError";
import { iMidias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const deletarMidiaService = async (
  userId: string,
  midiaId: string
): Promise<boolean | AppError> => {
  let user = await Usuarios.findById(userId);
  const midias: iMidias[] = user?.midias as iMidias[];
  const midia = midias.find((item) => item._id?.valueOf() == midiaId);
  if (!midia) {
    throw new AppError(404, "Rede social não encontrada");
  }

  let novasMidias = midias.filter((item) => item._id?.valueOf() !== midiaId);

  await Usuarios.findOneAndUpdate(
    { _id: userId },
    { midias: novasMidias ? novasMidias : [] }
  );

  return true;
};

export default deletarMidiaService;

import AppError from "../../errors/appError";
import { iFotos } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const deletarFotoService = async (
  userId: string,
  fotoId: string
): Promise<boolean | AppError> => {
  let user = await Usuarios.findById(userId);
  const fotos: iFotos[] = user?.fotos!;
  const foto = fotos.find((item) => item._id?.valueOf() == fotoId);
  if (!foto) {
    throw new AppError(404, "Foto não encontrada");
  }

  let novasFotos = fotos.filter((item) => item._id?.valueOf() !== fotoId);

  await Usuarios.findOneAndUpdate(
    { _id: userId },
    { fotos: novasFotos ? novasFotos : [] }
  );

  return true;
};

export default deletarFotoService;

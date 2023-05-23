import AppError from "../../errors/appError";
import { iCategorias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const deletarCategoriaService = async (
  userId: string,
  categoriaId: string
): Promise<boolean | AppError> => {
  let user = await Usuarios.findById(userId);
  const categorias: iCategorias[] = user?.categorias as iCategorias[];
  const categoria = categorias.find(
    (item) => item._id?.valueOf() == categoriaId
  );
  if (!categoria) {
    throw new AppError(404, "Rede social não encontrada");
  }

  let novasCategorias = categorias.filter(
    (item) => item._id?.valueOf() !== categoriaId
  );

  await Usuarios.findOneAndUpdate(
    { _id: userId },
    { categorias: novasCategorias ? novasCategorias : [] }
  );

  return true;
};

export default deletarCategoriaService;

import AppError from "../../errors/appError";
import { iCategorias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const registrarUnicaCategoriaService = async (
  userId: string,
  data: iCategorias
): Promise<iCategorias | AppError> => {
  let user = await Usuarios.findById(userId);
  const categorias = user?.categorias;
  const procurarCategoria = categorias?.find(
    (item) => item?.categoria === data.categoria
  );
  if (procurarCategoria) {
    throw new AppError(409, "Categoria já cadastrada");
  }
  const novasCategorias = [...categorias!, data];

  await Usuarios.findOneAndUpdate(
    { _id: userId },
    { categorias: novasCategorias }
  );
  user = await Usuarios.findById(userId);

  const dadosRetorno = user!.categorias;

  return dadosRetorno![dadosRetorno!.length - 1];
};

export default registrarUnicaCategoriaService;

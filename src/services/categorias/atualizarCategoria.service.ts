import AppError from "../../errors/appError";
import { iCategorias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const atualizarCategoriaService = async (
  userId: string,
  categoriaId: string,
  data: iCategorias
): Promise<iCategorias | AppError> => {
  let user = await Usuarios.findById(userId);
  const categorias = user?.categorias;
  const categoriaFiltrada = categorias?.filter(
    (item) => item._id == categoriaId
  );

  if (categoriaFiltrada?.length! < 1) {
    throw new AppError(404, "Categoria não encontrada");
  }

  let index = categorias?.indexOf(categoriaFiltrada![0]);
  const categoria = categorias![index!];

  categoria.categoria = data.categoria ? data.categoria : categoria.categoria;

  user?.save();

  return categoria;
};

export default atualizarCategoriaService;

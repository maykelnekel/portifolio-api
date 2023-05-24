import { iCategorias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const listarTodasMidiaService = async (
  userId: string
): Promise<Array<iCategorias>> => {
  let user = await Usuarios.findById(userId);
  return user?.categorias!;
};

export default listarTodasMidiaService;

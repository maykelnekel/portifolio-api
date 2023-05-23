import { iFotos } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const listarTodasFotosService = async (userId: string): Promise<iFotos[]> => {
  let user = await Usuarios.findById(userId);
  return user?.fotos!;
};

export default listarTodasFotosService;

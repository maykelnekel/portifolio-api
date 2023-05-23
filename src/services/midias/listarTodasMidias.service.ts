import { iMidias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const listarTodasMidiaService = async (userId: string): Promise<iMidias[]> => {
  let user = await Usuarios.findById(userId);
  return user?.midias!;
};

export default listarTodasMidiaService;

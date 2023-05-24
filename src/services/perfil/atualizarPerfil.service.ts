import AppError from "../../errors/appError";
import { iUser, iUserResponse } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";
import "dotenv/config";

const baseUrl = process.env.BASE_URL;
const atualizarPerfilService = async (
  userId: string,
  data: object
): Promise<iUserResponse | AppError> => {
  const updateOptions = {
    new: false,
    runValidators: true,
  };

  const usuario: iUser | null = await Usuarios.findByIdAndUpdate(
    userId,
    data,
    updateOptions
  );

  if (!usuario) {
    throw new AppError(404, "Usuário não encontrado");
  }

  const usuarioResposta: iUserResponse = {
    _id: usuario._id,
    email: usuario.email,
    telefone: usuario.telefone,
    sobreMim: usuario.sobreMim,
    nome: usuario.nome,
    sobrenome: usuario.sobrenome,
    fotos: `${baseUrl}/fotos`,
    midias: `${baseUrl}/midias`,
    categorias: `${baseUrl}/categorias`,
  };
  return usuarioResposta;
};
export default atualizarPerfilService;

import AppError from "../../errors/appError";
import { iUser, iUserResponse } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";
import "dotenv/config";

const baseUrl = process.env.BASE_URL;
const listarPerfilService = async (
  userId: string
): Promise<iUserResponse | AppError> => {
  const usuario: iUser | null = await Usuarios.findById(userId);
  if (!usuario) {
    throw new AppError(404, "Usuário não encontrado");
  }
  console.log(usuario);

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

export default listarPerfilService;

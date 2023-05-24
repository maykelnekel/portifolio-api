import AppError from "../../errors/appError";
import { iMidias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model";

const atualizarMidiaService = async (
  userId: string,
  midiaId: string,
  data: iMidias
): Promise<iMidias | AppError> => {
  let user = await Usuarios.findById(userId);
  const midias = user?.midias;
  const midiaFiltrada = midias?.filter((item) => item._id == midiaId);

  if (midiaFiltrada?.length! < 1) {
    throw new AppError(404, "Rede social não encontrada");
  }

  let index = midias?.indexOf(midiaFiltrada![0]);
  const midia = midias![index!];

  midia.nome = data.nome ? data.nome : midia.nome;
  midia.usuario = data.usuario ? data.usuario : midia.usuario;
  midia.link = data.link ? data.link : midia.link;

  user?.save();

  return midia;
};

export default atualizarMidiaService;

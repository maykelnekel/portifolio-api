import { iFotos } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model"

const registrarUnicaFotoService = async (userId: string, data: iFotos) => {
    let user = await Usuarios.findById(userId)

    const novasFotos = [...user!.fotos!, data]

    await Usuarios.findOneAndUpdate({_id: userId},{fotos: novasFotos})
    user = await Usuarios.findById(userId)

    const dadosRetorno = user!.fotos
    

    return dadosRetorno![dadosRetorno!.length - 1]


}

export default registrarUnicaFotoService
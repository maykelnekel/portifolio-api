import { iFotos, iMidias } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model"

const registrarUnicaMidiaService = async (userId: string, data: iMidias) => {
    let user = await Usuarios.findById(userId)

    const novasMidias = [...user!.midias!, data]

    await Usuarios.findOneAndUpdate({_id: userId},{midias: novasMidias})
    user = await Usuarios.findById(userId)

    return data

}

export default registrarUnicaMidiaService
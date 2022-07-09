import { iFotos } from "../../interfaces/interfaces"
import Usuarios from "../../models/user.model"

const listarUnicaFotoService = async (userId: string, fotoId: string) => {
    
    const user = await Usuarios.findById(userId)
    const fotos: iFotos[] = user?.fotos as iFotos[]
    const foto = fotos.find(item => item._id?.valueOf() === fotoId)

    if(!foto){
        throw new Error("Foto não encontrada")
    }
    return foto

}

export default listarUnicaFotoService
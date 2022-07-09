import { iFotos } from "../../interfaces/interfaces"
import Usuarios from "../../models/user.model"

const deletarFotoService = async (userId: string, fotoId: string) => {
    let user = await Usuarios.findById(userId)
    const fotos: iFotos[] = user?.fotos as iFotos[]
    const foto = fotos.find(item => item._id?.valueOf() == fotoId)
    if(!foto){
        throw new Error("Foto não encontrada")
    }

    let novasFotos = fotos.filter(item => item._id?.valueOf() !== fotoId)

    await Usuarios.findOneAndUpdate({_id: userId},{fotos: novasFotos ? novasFotos : []})
    
    return 
}

export default deletarFotoService
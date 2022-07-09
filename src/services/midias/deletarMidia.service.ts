import { iMidias } from "../../interfaces/interfaces"
import Usuarios from "../../models/user.model"

const deletarMidiaService = async (userId: string, midiaId: string) => {
    let user = await Usuarios.findById(userId)
    const midias: iMidias[] = user?.midias as iMidias[]
    const midia = midias.find(item => item._id?.valueOf() == midiaId)
    if(!midia){
        throw new Error("Rede social não encontrada")
    }

    let novasMidias = midias.filter(item => item._id?.valueOf() !== midiaId)

    await Usuarios.findOneAndUpdate({_id: userId},{midias: novasMidias ? novasMidias : []})
    
    return 
}

export default deletarMidiaService
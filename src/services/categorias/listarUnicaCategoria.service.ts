import { iCategorias } from "../../interfaces/interfaces"
import Usuarios from "../../models/user.model"

const listarUnicaMidiaService = async (userId: string, categoriaId: string) => {
    
    const user = await Usuarios.findById(userId)
    const categorias: iCategorias[] = user?.categorias as iCategorias[]
    const categoria = categorias.find(item => item._id?.valueOf() === categoriaId)

    if(!categoria){
        throw new Error("Rede social não encontrada")
    }
    return categoria

}

export default listarUnicaMidiaService
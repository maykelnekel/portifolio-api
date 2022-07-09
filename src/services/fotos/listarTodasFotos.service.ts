import Usuarios from "../../models/user.model"

const listarTodasFotosService = async (userId: string) => {
    
    let user = await Usuarios.findById(userId)
    return user?.fotos

}

export default listarTodasFotosService
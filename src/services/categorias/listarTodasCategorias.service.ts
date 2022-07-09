import Usuarios from "../../models/user.model"

const listarTodasMidiaService = async (userId: string) => {
    
    let user = await Usuarios.findById(userId)
    return user?.categorias

}

export default listarTodasMidiaService
import Usuarios from "../../models/user.model";


const listarPerfilService = async (userId: string) => {
    
       const usuario = await Usuarios.findById(userId)
        if (!usuario){
            throw new Error("Usuário não encontrado")
        }
        return usuario
} 

export default listarPerfilService
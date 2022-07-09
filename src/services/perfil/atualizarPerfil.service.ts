import { AnyAaaaRecord } from "dns";
import Usuarios from "../../models/user.model";


const atualizarPerfilService = async (userId: string, data: object) => {
    const updateOptions =  {
        new: true, 
        runValidators: true
    }

    const usuario = await Usuarios.findByIdAndUpdate(userId, data, updateOptions)

    if(!usuario){
        throw new Error("Usuário não encontrado")
    }

    return usuario

}
export default atualizarPerfilService
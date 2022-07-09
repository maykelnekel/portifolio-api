import { iFotos } from "../../interfaces/interfaces";
import Usuarios from "../../models/user.model"

const atualizarFotoService = async (userId: string, fotoId: string, data: iFotos) => {
    let user = await Usuarios.findById(userId)
    const fotos = user?.fotos
    const fotoFiltrada = fotos?.filter(item => item._id == fotoId)

    if(fotoFiltrada?.length! < 1){
        throw new Error("Foto não encontrada")
    }

    let index = fotos?.indexOf(fotoFiltrada![0])
    const foto = fotos![index!]
    // console.log(index)
    console.log(fotoFiltrada)
    
    foto.categoria = data.categoria ? data.categoria : foto.categoria;
    foto.descricao = data.descricao ? data.descricao : foto.descricao;
    foto.link = data.link ? data.link : foto.link;

    user?.save();



    return foto

}

export default atualizarFotoService
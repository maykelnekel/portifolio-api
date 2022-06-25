import Usuarios from "../../models/user.model";


const pegarUsuarios = async () => await Usuarios.find()

export default pegarUsuarios
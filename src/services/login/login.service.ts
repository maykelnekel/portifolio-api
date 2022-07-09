import bcrypt from "bcrypt"
import Usuarios from "../../models/user.model"
import jwt from "jsonwebtoken"
require('dotenv').config()


const loginService = async (email: string, senha: string) => {
    const person = await Usuarios.findOne({where:{email: email}})
    if (!person){
        throw new Error('Usuário ou senha incorreto')
    }

    const comparaSenha = await bcrypt.compareSync(senha, person?.senha)

    if(!comparaSenha){
        throw new Error('Usuário ou senha incorreto')
    } 
    const token = await jwt.sign({_id: person._id},process.env.SECRET_KEY as string,{expiresIn: '24h'})
    return token
}

export default loginService
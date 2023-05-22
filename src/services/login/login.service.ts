import bcryptjs from "bcryptjs"
import Usuarios from "../../models/user.model"
import jwt from "jsonwebtoken"
import 'dotenv/config'


const loginService = async (email: string, senha: string) => {
    const person = await Usuarios.findOne({ where: { email: email } })

    if (!person) {
        throw new Error('Usuário ou senha incorreto')
    }

    const comparaSenha = bcryptjs.compareSync(senha, person.senha)

    if (!comparaSenha) {
        throw new Error('Usuário ou senha incorreto')
    }
    const token = jwt.sign({ _id: person._id }, process.env.SECRET_KEY as string, { expiresIn: '24h' })
    return token
}

export default loginService
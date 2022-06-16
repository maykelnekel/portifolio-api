import { Response, Request } from "express";
import bcrypt from 'bcrypt'
import Usuarios from "../models/user.model";

const login = async (req: Request,res: Response) => {
    const {bodyEmail, bodySenha} = req.body
    const person = await Usuarios.findOne({email: bodyEmail})

    if (!person){
        return res.status(404).send({message:'Usuário não encontrado'})
    }
    bcrypt.compare(bodySenha, person?.senha,(err, hash)=>{
        if(err){
            return res.status(401).send({message: 'Senha incorreta'})
        }
        const token = 'token'
        return res.status(200).send({message: token})
    })
}
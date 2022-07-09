import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization
    if(!token){
        return res.status(400).json({message: 'Token de autorização inválido'})
    }
    
    token = token.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY as string, (error: any, decoded: any)=>{
        if(error){
            return res.status(400).json({message: 'Token de autorização inválido'})
        }
        req.user = {
            _id: decoded._id
        }

        next()
    })

    
}

export default authenticationMiddleware
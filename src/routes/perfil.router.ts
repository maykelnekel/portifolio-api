import { Router } from "express"
import { atualizarPerfil, listarPerfil, listarUsuarios } from "../controllers/perfil.controller"

const userRouter = Router()

userRouter.get('', listarUsuarios)
userRouter.get('/:userId', listarPerfil)
userRouter.patch('/:userId', atualizarPerfil)

export default userRouter
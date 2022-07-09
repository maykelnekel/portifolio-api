import { Router } from "express"
import { atualizarPerfilController, listarPerfilController } from "../controllers/perfil.controller"
import authenticationMiddleware from "../middleware/auth.middleware"

const userRouter = Router()

userRouter.get('', listarPerfilController)
userRouter.patch('', atualizarPerfilController)

export default userRouter
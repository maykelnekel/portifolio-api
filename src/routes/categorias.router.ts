import { Router } from "express"
import { atualizarCategoriaController, deletarCategoriaController, listarTodasCategoriasController, listarUnicaCategoriaController, registrarCategoriaController } from "../controllers/categorias.controller"
import authenticationMiddleware from "../middleware/auth.middleware"

const categoriasRouter = Router()

categoriasRouter.use(authenticationMiddleware)
categoriasRouter.post('', registrarCategoriaController)
categoriasRouter.get('', listarTodasCategoriasController)
categoriasRouter.get('/:id', listarUnicaCategoriaController)
categoriasRouter.patch('/:id', atualizarCategoriaController)
categoriasRouter.delete('/:id', deletarCategoriaController)


export default categoriasRouter
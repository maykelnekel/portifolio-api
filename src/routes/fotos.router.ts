import { Router } from "express"
import { atualizarFotoController, deletarFotoController, listarTodasFotosController, listarUnicaFotoController, registrarFotoController } from "../controllers/fotos.controller"

const fotosRouter = Router()

fotosRouter.post('', registrarFotoController)
fotosRouter.get('', listarTodasFotosController)
fotosRouter.get('/:id', listarUnicaFotoController)
fotosRouter.patch('/:id', atualizarFotoController)
fotosRouter.delete('/:id', deletarFotoController)


export default fotosRouter
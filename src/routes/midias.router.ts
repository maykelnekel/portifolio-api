import { Router } from "express"
import { atualizarMidiaController, deletarMidiaController, listarTodasMidiasController, listarUnicaMidiaController, registrarMidiaController } from "../controllers/midias.controller"
import authenticationMiddleware from "../middleware/auth.middleware"

const midiasRouter = Router()

midiasRouter.use(authenticationMiddleware)
midiasRouter.post('', registrarMidiaController)
midiasRouter.get('', listarTodasMidiasController)
midiasRouter.get('/:id', listarUnicaMidiaController)
midiasRouter.patch('/:id', atualizarMidiaController)
midiasRouter.delete('/:id', deletarMidiaController)


export default midiasRouter
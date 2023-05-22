import express from "express"
import categoriasRouter from "./routes/categorias.router"
import fotosRouter from "./routes/fotos.router"
import loginRouter from "./routes/login.router"
import midiasRouter from "./routes/midias.router"
import perfilRouter from "./routes/perfil.router"


const app = express()

app.use(express.json())
app.use("/login", loginRouter)
app.use("/fotos", fotosRouter)
app.use("/perfil", perfilRouter)
app.use("/midias", midiasRouter)
app.use("/categorias", categoriasRouter)

export default app
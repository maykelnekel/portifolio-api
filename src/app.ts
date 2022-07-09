import express from "express"
import mongoose from "mongoose"
import authenticationMiddleware from "./middleware/auth.middleware"
import fotosRouter from "./routes/fotos.router"
import loginRouter from "./routes/login.router"
import perfilRouter from "./routes/perfil.router"

require('dotenv').config()

const bdUrl = process.env.BD_URL_CONNECTION
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use("/login", loginRouter)
app.use("/fotos", fotosRouter)
app.use("/perfil", perfilRouter)


mongoose.connect(bdUrl as string)
.then(()=>{
    console.log("banco conectado com sucesso")
    app.listen(port, () => {
        console.log("app iniciado com sucesso")
        
    })})
.catch((err)=> console.log(err))


export default app
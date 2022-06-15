import express from "express"
import mongoose from "mongoose"
import fotosRouter from "./routes/fotos.router"
import loginRouter from "./routes/login.router"

require('dotenv').config()

const port = 3000
const app = express()
const dbUrl = process.env.BD_URL_CONNECTION

app.use(express.json())

app.use("/login", loginRouter)
app.use("/fotos", fotosRouter)

mongoose.connect(dbUrl as string)
.then(()=>{
    console.log("banco conectado com sucesso")
    app.listen(port, () => console.log("app iniciado com sucesso"))})
.catch((err)=> console.log(err))


export default app
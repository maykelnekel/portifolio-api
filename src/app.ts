import express, { Request, Response } from "express"
import mongoose from "mongoose"

require('dotenv').config()

const port = 3000
const app = express()
const dbUrl = process.env.BD_URL_CONNECTION

app.use(express.json())

app.get('/', (req: Request, res: Response)=> res.status(200).send({message: "sds"}))

mongoose.connect(dbUrl as string)
.then(()=>{
    console.log("banco conectado com sucesso")
    app.listen(port, () => console.log("app iniciado"))})
.catch((err)=> console.log(err))

// app.listen(port, () => console.log("app iniciado"))

export default app
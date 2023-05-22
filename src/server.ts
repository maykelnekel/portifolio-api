
import "dotenv/config"
import app from './app';
import mongoose from 'mongoose';

const bdUrl = process.env.BD_URL_CONNECTION
const port = process.env.PORT

const server = () => {
    mongoose.connect(bdUrl!)
    console.log("banco de dados conectado com sucesso");
    app.listen(port, () => {
        console.log("app iniciado com sucesso")
    })
}

server()
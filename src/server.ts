import "dotenv/config";
import app from "./app";
import mongoose from "mongoose";
import { criaUsuario, jessica } from "./utils";

const bdUrl = process.env.BD_URL_CONNECTION;
const port = process.env.PORT;

const server = () => {
  mongoose.connect(bdUrl!);
  console.log("banco de dados conectado com sucesso");
  criaUsuario(jessica);
  app.listen(port, () => {
    console.log("app iniciado com sucesso");
  });
};

server();

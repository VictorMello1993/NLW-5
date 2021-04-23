import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();
const caminhoArquivosPublicos = path.join(__dirname, "..", "public");
const pastaView = path.join(__dirname, "..", "public");

app.use(express.static(caminhoArquivosPublicos)); //Reconhecendo todos os arquivos públicos (arquivos HTML, CSS, arquivos .js, imagens, etc...)

//Habilitando EJS (Template Engine do HTML do chat). Os arquivos HTML ficam na pasta 'view'
app.set("views", pastaView);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
  return res.render("html/client.html");
});

const http = createServer(app); //Criando um servidor do protocolo HTTP
const io = new Server(http); //Criando um servidor do procotolo WS (WebSocket)

//Abrindo a conexão do WebSocket quando o usuário envia a mensagem no chat
io.on("connection", (socket: Socket) => {
  // console.log("Conectado", socket.id);
});

app.use(express.json()); //Reconhece os dados vindos do corpo da requisição no formato JSON
app.use(routes); //Inicializa as rotas da aplicação

export { http, io };

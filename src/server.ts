import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json()); //Reconhece os dados vindos do corpo da requisição no formato JSON
app.use(routes); //Inicializa as rotas da aplicação

app.listen(3000, () => console.log("Loading..."));

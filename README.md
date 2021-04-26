# NLW (Next Level Week) 5ª edição


<img src="https://user-images.githubusercontent.com/35710766/116016432-f978d580-a612-11eb-833c-b5ed80a7c9ef.jpg" alt="Papel de parede da NLW"/>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VictorMello1993/NLW-5?color=FF0000">
  
  <a href="https://github.com/VictorMello1993/NLW-5/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VictorMello1993/NLW-5?color=D3D3D3">
  </a> 
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/VictorMello1993/NLW-5/stargazers"></a>
</p>

<p align="center">
  <a href="#clapper-demo">Demo</a> •
  <a href="#earth_americas-visão-geral">Visão geral</a> •
  <a href="#books-o-que-é-websocket">O que é WebSocket?</a> •  
  <a href="#wrench-recursos">Recursos</a> •
  <a href="#triangular_flag_on_postcomeçando">Começando</a>  
</p>

---

<h2>:clapper: Demo</h2>

## Primeira conexão do usuário ao atendente
![Gif1](https://user-images.githubusercontent.com/35710766/116016661-b2d7ab00-a613-11eb-82ef-7531a93be0e8.gif)

</br>

## Resposta do usuário ao atendente
![Gif2](https://user-images.githubusercontent.com/35710766/116016756-034f0880-a614-11eb-8cbf-a6aee747f49c.gif)

</br>

## Conexão com múltiplos usuários ao atendente 
![Gif3](https://user-images.githubusercontent.com/35710766/116016819-2aa5d580-a614-11eb-8a0e-d21622e903b1.gif)

---

<h2>:earth_americas: Visão geral</h2>
<p>Aplicação construída para aprofundar os conceitos de back-end com Node.js abordados na NLW (Next Level Week) 5ª edição, promovida pela <a href="https://rocketseat.com.br/">Rocketseat</a>. Trata-se de um chat simples, mas que envolve múltiplos usuários na mesma aplicação. O projeto visa estudar o protocolo WebSocket.</p>

<h2>:books: O que é WebSocket?</h2>
<p>É o protocolo de comunicação de dados que permite uma comunicação entre duas ou mais entidades, bidirecional, e em tempo real. É o mais indicado para aplicações que demandam alta performance, com menor tempo de resposta possível. É uma alternativa ao uso do simples protocolo HTTP, que por mais que seja utilizado na maioria das aplicações, não é indicado em aplicações in real time, pelo fato da comunicação ser síncrona, onde o cliente necesariamente deve aguardar a resposta da requisição por parte do servidor, o que torna a aplicação bastante custosa, com menos performance. Em aplicações de mensagens instantâneas como Whatsapp, Discord, Microsoft Teams, a comunicação é assíncrona, ou seja, o cliente não necessariamente precisa aguardar a resposta do servidor para continuar enviando mensagens. Ele pode até mesmo enviar várias mensagens sem mesmo ter recebido nenhuma resposta do servidor ou do outro cliente.</p>

---

<h2>:wrench: Recursos</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>Node.js</li>
  <li>SQLite</li>
  <li>EJS (Template Engine do HTML)</li>
  <li>Typescript</li>
  <li>socket.io (Biblioteca js para conexão do WebSocket)</li>
  <li>Express.js (Microframework para gerenciamento de rotas usando protocolo HTTP</li>
</ul>

---

<h2>:triangular_flag_on_post:Começando</h2>

1 - Clone o repositório
```
git clone https://github.com/VictorMello1993/NLW-5.git
```

2 - Abra o VS Code abra a pasta "NLW-5" que é a pasta raíz do projeto

3 - No terminal do VS Code, digite ```npm i``` para instalar todas as dependências ao projeto

4 - Executar o script ```npm run dev``` para iniciar o servidor. Caso tenha yarn instalado, poderá executar digitando ```yarn dev```. Caso ocorra algum erro, provavelmente é a porta já ocupada por outra aplicação. Então, mude de porta na linha ```http.listen(3000, () => console.log("Loading..."));``` no ```server.ts```, trocando 3000 para qualquer outro número, e execute novamente o comando

5 - Se estiver funcionando na porta 3000, na barra de endereços do seu navegador, escreva `localhost:3000/pages/client` para abrir a página de usuário e  `localhost:3000/pages/admin` para abrir a página de administador (ou atendente)

6 - Para aparecer as conexões do usuário na página do administrador, é preciso mandar a primeira mensagem clicando no botão ```Suporte```, preencher o e-mail e escrever o texto. Depois disso, clicando no botão ```Iniciar chat``` irá aparecer a lista de usuários na fila para ser atendido, conforme as imagens abaixo:

<img src="https://user-images.githubusercontent.com/35710766/116019748-46f94080-a61b-11eb-8307-324e2b808ac0.png" alt="Imagem de chat do cliente"/>
<span align="center"><i>Primeira mensagem do usuário que será atendido pelo administrador</i></span>

</br>
</br>
</br>
</br>

<img src="https://user-images.githubusercontent.com/35710766/116020487-bb80af00-a61c-11eb-9475-684cd37f6012.png" alt="Lista de usuários na fila de atendimento"/>
<span align="center"><i>Lista de usuários na fila de atendimento</i></span>

</br>
</br>
</br>
</br>

<img src="https://user-images.githubusercontent.com/35710766/116020571-f387f200-a61c-11eb-9380-f569f655977b.png" alt="Janela de chat do administrador com usuário selecionado na fila"/>
<span align="center"><i>Janela de chat do administrador com usuário já conectado</i></span>

</br>
</br>
</br>
</br>

---

## Melhorias
- [ ] Incluir autenticação e autorização para perfis de usuário de cliente e usuário administrador com JWT

## Versões do README
<img src="https://user-images.githubusercontent.com/35710766/116021063-d273d100-a61d-11eb-8078-332213bc2d03.png" alt="Bandeira dos Estados Unidos" width="22px"/> <a href="/README-ENUS.md">Inglês</a> | <img src="https://user-images.githubusercontent.com/35710766/116020959-a8221380-a61d-11eb-9c40-5af85e373ec3.jpg" alt="Bandeira do Brasil" width="22px"/> <a href="/README.md">Português</a>

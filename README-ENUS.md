# NLW (Next Level Week) Season 5


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
  <a href="#earth_americas-overview">Overview</a> •
  <a href="#books-what-is-websocket">What is WebSocket?</a> •  
  <a href="#wrench-features">Features</a> •
  <a href="#triangular_flag_on_postgetting-started">Getting started</a> •  
  <a href="#improvements">Improvements</a>    
</p>

---

<h2>:clapper: Demo</h2>

## User's first connection to admin
![Gif1](https://user-images.githubusercontent.com/35710766/116016661-b2d7ab00-a613-11eb-82ef-7531a93be0e8.gif)

</br>

## User response to admin
![Gif2](https://user-images.githubusercontent.com/35710766/116016756-034f0880-a614-11eb-8cbf-a6aee747f49c.gif)

</br>

## Multi-user connection to admin
![Gif3](https://user-images.githubusercontent.com/35710766/116016819-2aa5d580-a614-11eb-8a0e-d21622e903b1.gif)

---

<h2>:earth_americas: Overview</h2>
<p>App built to enhance back-end skills with Node.js taught at NLW (Next Level Week) season 5, promoted by <a href="https://rocketseat.com.br/">Rocketseat</a>. It's about a simple chat, but involves muti users in the same application. The project aims to study WebSocket protocol.</p>

<h2>:books: What is WebSocket?</h2>
<p>Is a data communication protocol that allows communication between two or more entities, bidirectional, and in real time. It's the most indicated for applications that demands high performance, with the shortest response time possible. It's an alternative to the use of the simple HTTP protocol, that however much it is used in most applications, it is not indicated for in real time applications, because the communication is synchronous, where the client must necessarily wait a response by the server, which makes the application quite costly, with less performance. In instant messaging applications like Whatsapp, Discord, Microsoft Team, among others, the communication is asynchronous, where the client does not necessarily need to wait the server response to keep sending messages. He can even send multiple messages without even receiving any response from the server or the other client. </p>

---

<h2>:wrench: Features</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>Node.js</li>
  <li>SQLite</li>
  <li>EJS (HTML Template Engine)</li>
  <li>Typescript</li>
  <li>socket.io (Js lib for WebSocket connections)</li>
  <li>Express.js (Microframework for routes management using HTTP protocol)</li>
</ul>

---


<h2>:triangular_flag_on_post:Getting started</h2>

1- Clone the repository
```git clone https://github.com/VictorMello1993/NLW-5.git```

2- Open VS Code and open the folder ```NLW5``` as a root folder

3- From the VS Code terminal, type ```npm i``` to install all of the dependencies to the projet

4- Execute ```npm run dev``` to start the server. If you've already had yarn installed, just type ```yarn dev```. In case of errors, problably is a port already busy by the other application. Then, change the port on line ```http.listen(3000, () => console.log("Loading..."));``` on ```server.ts```, changing 3000 to another number, and run the command again.

5- Otherwise, from the address bar in your browser, type ```localhost:3000/pages/client``` to open the user's page and ```localhost:3000/pages/admin``` to open the admin's page (or attendant)

6- To the user's connections be shown on the admin's page, you need to send the first message clicking on ```Suporte``` button, fill e-mail and write some text. After that, clicking on ```Iniciar chat``` button will show the users in support list to be served, as shown in the images below:

<img src="https://user-images.githubusercontent.com/35710766/116019748-46f94080-a61b-11eb-8307-324e2b808ac0.png" alt="Client chat image"/>
<i>First user's message before to be served by attendant</i>

</br>
</br>
</br>
</br>

<img src="https://user-images.githubusercontent.com/35710766/116020487-bb80af00-a61c-11eb-9475-684cd37f6012.png" alt="Users in support queue"/>
<i>Users in support queue</i>

</br>
</br>
</br>
</br>

<img src="https://user-images.githubusercontent.com/35710766/116020571-f387f200-a61c-11eb-9380-f569f655977b.png" alt="Janela de chat do administrador com usuário selecionado na fila"/>
<i>Attendant's chat window with user already connected</i>

</br>
</br>

---


## Improvements
- [ ] Add authentication and authorization for user's client and admin (attendant) with JWT

## Versões do README
<img src="https://user-images.githubusercontent.com/35710766/116021063-d273d100-a61d-11eb-8078-332213bc2d03.png" alt="United States flag" width="22px"/> <a href="/README-ENUS.md">English</a> | <img src="https://user-images.githubusercontent.com/35710766/116020959-a8221380-a61d-11eb-9c40-5af85e373ec3.jpg" alt="Brazil flag" width="22px"/> <a href="/README.md">Portuguese</a>


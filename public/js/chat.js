let socket_admin_id = null;
let emailUser = null;
let socket = null;

document.querySelector("#start_chat").addEventListener("click", (event) => {
  socket = io();

  const chat_help = document.getElementById("chat_help")
  chat_help.style.display = "none"

  const chat_in_support = document.getElementById("chat_in_support")
  chat_in_support.style.display = "block"

  const email = document.getElementById("email").value
  emailUser = email

  const text = document.getElementById("txt_help").value
  const params = {
    email,
    text
  }

  socket.on("connect", () => {
    socket.emit("client_first_access", params, (call, err) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(call)
      }
    })
  })

  socket.on("client_list_all_messages", messages => {
    // console.log("messages", messages)
    var template_client = document.getElementById('message-user-template').innerHTML
    var template_admin = document.getElementById('admin-template').innerHTML

    //Populando as mensagens ao chat, pelo HTML
    messages.forEach(message => {
      //Se admin_id for null, então a mensagem é do usuário
      if (!message.admin_id) {
        const rendered = Mustache.render(template_client, {
          message: message.text, //Texto da mensagem obtida da entidade Message
          email //Texto de e-mail do usuário vindo do front-end, no evento de click do botão de iniciar chat
        })
        document.getElementById('messages').innerHTML += rendered
      }
      else { //Caso contrário, a mensagem é do admin (atendente)
        const rendered = Mustache.render(template_admin, {
          message_admin: message.text
        })
        document.getElementById('messages').innerHTML += rendered
      }
    })
  })

  //A mensagem enviada pelo admin será preenchida na caixa do cliente
  socket.on("admin_send_to_client", message => {
    socket_admin_id = message.socket_id

    const template_admin = document.getElementById('admin-template').innerHTML
    const rendered = Mustache.render(template_admin, {
      message_admin: message.text
    })

    document.getElementById('messages').innerHTML += rendered
  })
});

//Envio da mensagem de resposta do usuário ao admin 
document.querySelector('#send_message_button').addEventListener('click', (event) => {
  const text = document.getElementById('message_user')

  const params = {
    text: text.value,
    socket_admin_id
  }

  socket.emit('client_send_to_admin', params)

  const templateClient = document.getElementById('message-user-template').innerHTML

  const rendered = Mustache.render(templateClient, { message: text.value, email: emailUser })

  document.getElementById('messages').innerHTML += rendered
})

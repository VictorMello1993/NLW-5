const socket = io();
let connectionsUsers = [];

//Admin escuta o evento de listagem das mensagens dos usuários
socket.on('admin_list_all_users', (connections) => {
  connectionsUsers = connections;
  document.getElementById('list_users').innerHTML = '';
  let template = document.getElementById('template').innerHTML

  connections.forEach(connection => {
    const rendered = Mustache.render(template, {
      email: connection.user.email,
      id: connection.socket_id
    })

    document.getElementById('list_users').innerHTML += rendered;
  })
})

//Conexão do admin com usuário via socket
function call(id) {
  const connection = connectionsUsers.find(connection => connection.socket_id === id)
  const template = document.getElementById('admin_template').innerHTML

  const rendered = Mustache.render(template, {
    email: connection.user.email,
    id: connection.user_id
  })

  document.getElementById('supports').innerHTML += rendered;

  const params = {
    user_id: connection.user.id
  }

  //Populando o histórico de mensagens por usuário que se conectou com admin na tela /pages/admin
  socket.emit('admin_list_messages_by_user', params, messages => {
    const divMessages = document.getElementById(`allMessages${connection.user_id}`)

    messages.forEach(message => {
      const createDiv = document.createElement('div')

      //Se admin_id for null, então é a mensagem do usuário
      if (!message.admin_id) {
        createDiv.className = 'admin_message_client'

        createDiv.innerHTML = `<span>${connection.user.email}</span>`
        createDiv.innerHTML += `<span>${message.text}</span>`
        createDiv.innerHTML += `<span class="admin_date">${dayjs(message.created_at).format('DD/MM/YYYY HH:mm:ss')}</span>`
      }
      else { //Senão, é a mensagem do admin (atendente)
        createDiv.className = 'admin_message_admin'

        createDiv.innerHTML = `Atendente: <span>${message.text}</span>`
        createDiv.innerHTML += `<span class="admin_date">${dayjs(message.created_at).format('DD/MM/YYYY HH:mm:ss')}</span>`
      }
      divMessages.appendChild(createDiv)
    })
  })
}

function sendMessage(id) {
  const text = document.getElementById(`send_message_${id}`)

  const params = {
    user_id: id,
    text: text.value
  }

  //Criando evento de envio de mensagem pelo admin para o usuário específico
  socket.emit('admin_send_message', params)

  const divMessages = document.getElementById(`allMessages${id}`)

  //Inserindo a mensagem na caixa do admin
  createDiv = document.createElement('div')
  createDiv.className = 'admin_message_admin'
  createDiv.innerHTML = `Atendente: <span>${params.text}</span>`
  createDiv.innerHTML += `<span class="admin_date">${dayjs().format('DD/MM/YYYY HH:mm:ss')}</span>`

  divMessages.appendChild(createDiv)

  text.value = '' //Limpando o campo de texto após envio
}
import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { MessagesService } from "../services/MessagesService";

io.on("connect", async (socket) => {
  const connectionsService = new ConnectionsService();
  const messagesService = new MessagesService();

  const allConnectionWithoutAdmin = await connectionsService.findAllWithoutAdmin();

  /*Disparando o evento de listar as mensagens de todos os 
   usuários do sistema. Neste caso, não será necessário utilizar 
   socket, pois o mesmo só será utilizado quando a mensagem é 
   enviada diretamente para um usuário específico que estiver 
   conectado.*/
  io.emit("admin_list_all_users", allConnectionWithoutAdmin);

  //Listener do evento de listagem das mensagens por usuário que se conectou com admin
  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;

    const allMessages = await messagesService.listByUser(user_id);

    callback(allMessages);
  });

  //Listener do evento de envio de mensagem do admin para o usuário específico
  socket.on("admin_send_message", async (params) => {
    const { user_id, text } = params;

    //Salvando a mensagem no banco de dados
    await messagesService.create({ text, user_id, admin_id: socket.id });

    const { socket_id } = await connectionsService.findByUserId(user_id);

    //Envio de mensagem para usuário
    io.to(socket_id).emit("admin_send_to_client", {
      text,
      socket_id: socket.id,
    });
  });

  /*Atualizando a lista de usuários que estão em atendimento. 
  Se clicar no botão de entrar em atendimento para um determinado usuário, o outro deve sair da fila*/
  socket.on("admin_user_in_support", async (params) => {
    const { user_id } = params;

    await connectionsService.updateAdminID(user_id, socket.id);

    const allConnectionWithoutAdmin = await connectionsService.findAllWithoutAdmin();

    io.emit("admin_list_all_users", allConnectionWithoutAdmin);
  });
});

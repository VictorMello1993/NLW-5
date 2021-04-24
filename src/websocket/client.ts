import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessagesService";

interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  //Primeiro acesso do usuário ao chat
  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params as IParams; //Casting para o tipo interface IParams
    let user_id = null;

    const userBase = await usersService.findByEmail(email);

    //Se não existir usuário cadastrado, será cadastrado um novo via WebSocket e estabelece a conexão com ele
    if (!userBase) {
      const user = await usersService.create(email);

      await connectionsService.create({
        socket_id,
        user_id: user.id,
      });

      user_id = user.id;
    } else {
      user_id = userBase.id;

      //Senão, verifica se o usuário está conectado ao chat
      const connection = await connectionsService.findByUserId(userBase.id);

      if (!connection) {
        //Se não estiver conectado, estabelece uma nova conexão com novo id do socket para o mesmo usuário
        await connectionsService.create({
          socket_id,
          user_id: userBase.id,
        });
      } else {
        //Senão, sobrescreve a mesma conexão passando um novo id socket ao invés de criá-lo como novo registro
        connection.socket_id = socket_id;
        await connectionsService.create(connection);
      }
    }

    await messagesService.create({ text, user_id });

    //Listando todas as mensagens do usuário
    const allMessages = await messagesService.listByUser(user_id);
    socket.emit("client_list_all_messages", allMessages);
  });
});

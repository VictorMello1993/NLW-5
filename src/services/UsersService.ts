import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    //Verificar se usuário existe
    const userBase = await this.usersRepository.findOne({ email });

    //Se existir, retornar objeto user do banco de dados
    if (userBase) {
      return userBase;
    }

    //Se não existir, salvar um novo usuário no banco
    const newUser = this.usersRepository.create({ email });

    await this.usersRepository.save(newUser);

    return newUser;
  }
}

export { UsersService };

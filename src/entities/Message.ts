import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  @JoinColumn({ name: "user_id" }) //Relacionamento 1 - N (1 usuário pode enviar 1 ou várias mensagens)
  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  user_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Message };

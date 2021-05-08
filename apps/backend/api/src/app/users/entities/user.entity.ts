import type { IUsers } from '@int-srv/shared/utils/interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity implements IUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn()
  updated: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ length: 50, unique: true, nullable: true })
  nickname: string;

  @Column({ nullable: true })
  phone: string;
}

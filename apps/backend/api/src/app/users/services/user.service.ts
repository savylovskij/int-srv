import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../entities/user.entity';

/**
 * User service
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  /**
   * Find all users
   */
  async find(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  /**
   * Find user by param id
   * @param id
   */
  async findOneById(id: number): Promise<UserEntity> {
    return (await this.userRepository.findOne(id)) || null;
  }

  /**
   * Find user by username
   * @param username
   */
  async findOneByUserName(username: string): Promise<UserEntity> {
    const user = await this.userRepository.find({ username });
    return user && user.length === 1 ? user[0] : null;
  }

  /**
   * Create user by param
   * @param user
   */
  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = await this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
}

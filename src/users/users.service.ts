import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { HashService } from '../hash/hash.service';
import { errors } from '../utils/errors';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly hashService: HashService,
  ) {}

  async getUsers() {
    return await this.usersRepository.find();
  }

  async createUser(data) {
    const hashedPassword = await this.hashService.hashPassword(data.password);
    return await this.usersRepository.save({
      ...data,
      password: hashedPassword,
    });
  }

  async updateUser(id, data) {
    const user = await this.usersRepository.findOneBy({ id });
    console.log(data);
    if (!(user.username === data.username))
      throw new BadRequestException(errors.WRONG_DATA);
    return await this.usersRepository.update(id, data);
  }

  async removeUser(id) {
    return await this.usersRepository.delete(id);
  }

  async findUserByEmail(email) {
    return await this.usersRepository.findOneBy({ email });
  }

  async findUserByUsername(username) {
    return await this.usersRepository.findOneBy({ username });
  }

  async findUserById(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async searchUsers(data) {
    return await this.usersRepository.find(data);
  }
}

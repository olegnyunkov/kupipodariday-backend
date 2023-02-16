import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUser(id) {
    return this.usersRepository.findOneBy({ id });
  }

  createUser(data) {
    return this.usersRepository.save(data);
  }

  updateUser(id, data) {
    return this.usersRepository.update(id, data);
  }

  removeUser(id) {
    return this.usersRepository.delete(id);
  }
}

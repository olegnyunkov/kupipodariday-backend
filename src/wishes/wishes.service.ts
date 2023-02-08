import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wish } from './entities/wishes.entity';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private wishesRepository: Repository<Wish>,
  ) {}

  createWish(data) {
    return this.wishesRepository.save(data);
  }

  getById(id) {
    return this.wishesRepository.findOneBy(id);
  }

  updateWish(id, data) {
    return this.wishesRepository.update(id, data);
  }

  removeWish(id) {
    return this.wishesRepository.delete(id);
  }
}

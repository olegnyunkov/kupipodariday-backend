import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wish } from './entities/wishes.entity';
import { rethrow } from '@nestjs/core/helpers/rethrow';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private wishesRepository: Repository<Wish>,
  ) {}

  createWish(user, data) {
    return this.wishesRepository.save({ ...data, owner: user });
  }

  getById(id) {
    return this.wishesRepository.findOne({
      where: { id },
      relations: {
        owner: true,
        offers: true,
      },
    });
  }

  updateWish(id, data) {
    return this.wishesRepository.update(id, data);
  }

  removeWish(id) {
    return this.wishesRepository.delete(id);
  }

  async findUserWishes(id) {
    return await this.wishesRepository.find({
      where: { owner: { id } },
      relations: ['offers', 'owner'],
    });
  }

  async findLast() {
    return await this.wishesRepository.find({
      take: 40,
      order: { createdAt: 'DESC' },
    });
  }

  async findTop() {
    return await this.wishesRepository.find({
      take: 10,
      order: { copied: 'DESC' },
    });
  }

  async copyUserWishes() {
    return;
  }
}

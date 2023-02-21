import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './entities/offers.entity';
import { Repository } from 'typeorm';
import { WishesService } from "../wishes/wishes.service";

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offersRepository: Repository<Offer>,
    private readonly wishesService: WishesService,
  ) {}

  async getOffers() {
    return await this.offersRepository.find({
      relations: ['item', 'user'],
    });
  }

  async getOfferById(id) {
    return await this.offersRepository.findOne({
      where: { id },
      relations: ['item', 'user'],
    });
  }

  async createOffer(data, info) {
    const userWish = await this.wishesService.getById(data.id);
    const offer = this.offersRepository.create({
      ...data,
      user: info.user,
      item: userWish,
    });
    return await this.offersRepository.save(offer);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './entities/offers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offersRepository: Repository<Offer>,
  ) {}

  async getOffers() {
    return await this.offersRepository.find();
  }

  async getOfferById(id) {
    return await this.offersRepository.findOne(id);
  }

  async createOffer() {
    return;
  }
}

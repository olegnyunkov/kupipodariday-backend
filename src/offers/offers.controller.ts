import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OffersService } from './offers.service';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('offers')
@UseGuards(JwtGuard)
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  async createOffer() {
    return await this.offersService.createOffer();
  }

  @Get()
  async getOffers() {
    return await this.offersService.getOffers();
  }

  @Get(':id')
  async getOfferById(@Param() id: string) {
    return await this.offersService.getOfferById(id);
  }
}

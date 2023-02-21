import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('offers')
@UseGuards(JwtGuard)
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  async createOffer(@Body() data, @Req() info) {
    return await this.offersService.createOffer(data, info);
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

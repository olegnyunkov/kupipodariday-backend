import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Req,
  UseGuards
} from "@nestjs/common";
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}
  // @UseGuards(JwtGuard)
  @Post()
  async create(@Req() data, @Body() createWishDto: CreateWishDto) {
    return await this.wishesService.createWish(data.user, createWishDto);
  }

  @Get('last')
  async getUserLastWishes() {
    return await this.wishesService.findLast();
  }

  @Get('top')
  async getUserTopWishes() {
    return await this.wishesService.findTop();
  }

  // @UseGuards(JwtGuard)
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.wishesService.getById(+id);
  }

  // @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishDto: UpdateWishDto) {
    return this.wishesService.updateWish(id, updateWishDto);
  }

  // @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishesService.removeWish(id);
  }

  @Post(':id/copy')
  async copyUserWishes(@Param('id') id, @Req() data) {
    return await this.wishesService.copyUserWishes();
  }
}

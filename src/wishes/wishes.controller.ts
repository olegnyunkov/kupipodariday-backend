import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}
  @Post()
  create(@Body() createWishDto: CreateWishDto) {
    return this.wishesService.createWish(createWishDto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.wishesService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWishDto: UpdateWishDto) {
    return this.wishesService.updateWish(id, updateWishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishesService.removeWish(id);
  }
}

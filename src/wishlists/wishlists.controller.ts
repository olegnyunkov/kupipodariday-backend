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
import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistService: WishlistsService) {}
  @Get()
  getWishlists() {
    return this.wishlistService.getWishlists();
  }

  @Post()
  createWishlist(@Req() data, @Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistService.createWishlist(data.user, createWishlistDto);
  }

  @Get(':id')
  getWishlistsById() {
    return;
  }

  @Patch(':id')
  updateWishlist(
    @Body() updateWishlistDto: UpdateWishlistDto,
    @Param('id') id: string,
  ) {
    return this.wishlistService.updateWishlist(id, updateWishlistDto);
  }

  @Delete(':id')
  removeWishlist(@Param('id') id: string) {
    return this.wishlistService.removeWishlist(id);
  }
}

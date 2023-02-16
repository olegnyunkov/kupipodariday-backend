import { Controller, Get } from '@nestjs/common';
import { WishlistsService } from './wishlists.service';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistService: WishlistsService) {}
  @Get()
  getWishlists() {
    return this.wishlistService.getWishlists();
  }
}

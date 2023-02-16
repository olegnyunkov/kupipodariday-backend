import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlists.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist) wishlistsRepository: Repository<Wishlist>,
  ) {}
  getWishlists() {
    return 'hello';
  }
}

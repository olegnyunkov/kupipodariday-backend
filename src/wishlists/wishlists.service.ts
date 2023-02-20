import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlists.entity';

@Injectable()
export class WishlistsService {
  constructor(@InjectRepository(Wishlist) private readonly wishlistsRepository: Repository<Wishlist>) {}
  getWishlists() {
    return this.wishlistsRepository.find();
  }

  createWishlist(user, data) {
    return this.wishlistsRepository.save(data);
  }

  updateWishlist(id, data) {
    return this.wishlistsRepository.update(id, data);
  }

  removeWishlist(id) {
    return this.wishlistsRepository.delete(id);
  }
}

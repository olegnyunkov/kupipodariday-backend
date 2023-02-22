import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlists.entity';
import { WishesService } from '../wishes/wishes.service';
import { errors } from '../utils/errors';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistsRepository: Repository<Wishlist>,
    private readonly wishesService: WishesService,
  ) {}
  async getWishlists() {
    return await this.wishlistsRepository.find({
      relations: ['owner', 'items'],
    });
  }

  async createWishlist(user, data) {
    const wishes = await this.wishesService.searchWishesById(data);
    await this.wishlistsRepository.save({
      ...data,
      owner: user,
      items: wishes,
    });
    return await this.wishlistsRepository.findOne({
      where: { name: data.name },
      relations: ['owner', 'items'],
    });
  }

  async updateWishlist(id, dto, data) {
    const wishlist = await this.getWishlistsById(id);
    if (!wishlist) throw new BadRequestException(errors.NOT_CREATED);
    const userWishes = await this.wishesService.searchWishesById(dto);
    return this.wishlistsRepository.save({
      ...wishlist,
      name: dto.name,
      image: dto.image,
      description: dto.description,
      items: [...userWishes, ...wishlist.items],
    });
  }

  async removeWishlist(id, data) {
    const wishlist = await this.getWishlistsById(id);
    if (wishlist.owner.id !== data.user.id)
      throw new BadRequestException(errors.NOT_ALLOWED);
    return this.wishlistsRepository.delete(id);
  }

  async getWishlistsById(id) {
    return await this.wishlistsRepository.findOne({
      where: { id },
      relations: ['owner', 'items'],
    });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { WishesService } from '../wishes/wishes.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly wishesService: WishesService,
  ) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get('me')
  async getUser(@Req() data) {
    return this.userService.findUserById(data.id);
  }

  @Patch('me')
  async updateUser(@Req() data, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.updateUser(data.user.id, updateUserDto);
  }

  @Get('me/wishes')
  async getUserWishes(@Req() data) {
    return await this.wishesService.findUserWishes(data.user.id);
  }

  @Get(':username')
  async getUserByUsername(@Param('username') data: string) {
    return await this.userService.findUserByUsername(data);
  }

  @Get(':username/wishes')
  async getUserWishesByUsername(@Param('username') data) {
    const user = await this.userService.findUserByUsername(data);
    return await this.wishesService.findUserWishes(user.id);
  }

  @Get('find')
  async findMany(@Body('query') data) {
    return await this.userService.searchUsers(data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.removeUser(id);
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.userService.findUserById(+id);
  }
}

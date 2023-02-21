import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { errors } from '../utils/errors';
import { LocalGuard } from './guards/local.guard';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const userExists = await this.userService.findUserByEmail(
      createUserDto.email,
    );
    if (userExists) throw new BadRequestException(errors.USER_EXISTS);
    const createdUser = await this.userService.createUser(createUserDto);
    return this.authService.authUser(createdUser);
  }

  @UseGuards(LocalGuard)
  @Post('signin')
  async signin(@Req() data) {
    return this.authService.authUser(data.user);
  }
}

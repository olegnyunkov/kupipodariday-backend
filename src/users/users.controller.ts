import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get(':id')
  get(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }
}

// Редактирование профиля
// На странице можно установить или изменить аватар, описание профиля, почту или пароль.

// Просмотр профилей и «хотелок» других пользователей
// В профиле пользователя отображается имя пользователя, аватар и описание профиля при наличии.
// Дополнительно доступны для просмотра желаемые подарки пользователя.

// Поиск пользователей по имени пользователя или почте
// Принимает на вход строчку, содержащую почту или имя пользователя

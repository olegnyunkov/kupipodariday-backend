import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';

import { OffersModule } from './offers/offers.module';
import { AuthModule } from './auth/auth.module';
import config from './config/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HashModule } from './hash/hash.module';
import { WishlistsModule } from './wishlists/wishlists.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config) => config.get('config'),
      inject: [ConfigService],
    }),
    UsersModule,
    WishesModule,
    OffersModule,
    AuthModule,
    HashModule,
    WishlistsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

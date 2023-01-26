import { Column, Entity } from 'typeorm';
import { Length } from 'class-validator';
import { General } from '../../utils/general.entity';

@Entity()
export class User extends General {
  @Column({
    type: 'varchar',
    unique: true,
  })
  @Length(2, 30)
  username: string;

  @Column({
    type: 'varchar',
    default: 'Пока ничего не рассказал о себе',
  })
  @Length(2, 200)
  about: string;

  @Column({
    type: 'varchar',
    default: 'https://i.pravatar.cc/300',
  })
  avatar: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column()
  wishes: string;

  @Column()
  offers: string;

  @Column()
  wishlists: string;
}

import { Column, Entity } from 'typeorm';
import { General } from '../../utils/general.entity';
import { Length } from 'class-validator';

@Entity()
export class Wishlist extends General {
  @Column({
    type: 'varchar',
  })
  @Length(1, 250)
  name: string;

  @Column({
    type: 'varchar',
  })
  @Length(0, 1500)
  description: string;

  @Column({
    type: 'varchar',
  })
  image: string;

  @Column({
    type: 'varchar',
  })
  items: string[];
}

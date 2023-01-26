import { Column, Entity } from 'typeorm';
import { General } from '../../utils/general.entity';
import { Length } from 'class-validator';

@Entity()
export class Wish extends General {
  @Column({
    type: 'varchar',
  })
  @Length(1, 250)
  name: string;

  @Column({
    type: 'varchar',
  })
  link: string;

  @Column({
    type: 'varchar',
  })
  image: string;

  @Column({
    type: 'int',
  })
  price: number;

  @Column({
    type: 'int',
  })
  raised: number;

  @Column()
  owner: string;

  @Column({
    type: 'varchar',
  })
  @Length(1, 1024)
  description: string;

  @Column()
  offers: string;

  @Column({
    type: 'int',
  })
  copied: number;
}

import { Column, Entity } from 'typeorm';
import { General } from '../../utils/general.entity';

@Entity()
export class Offer extends General {
  @Column({
    type: 'varchar',
  })
  user: string;

  @Column({
    type: 'varchar',
  })
  item: string;

  @Column({
    type: 'int',
  })
  amount: number;

  @Column({
    type: 'boolean',
    default: false,
  })
  hidden: boolean;
}

import { Column, Entity, Index, Unique } from 'typeorm';

import { BaseEntity } from '../../common/entities/base.entity';

@Entity()
export class Book extends BaseEntity {
  @Column({ type: 'text' })
  @Index()
  public name: string;

  @Column({ type: 'text' })
  public description: string;

  @Column({ type: 'text', unique: true })
  @Index()
  public reference: string;

  @Column({ type: 'text' })
  public image: string;
}

export default Book;

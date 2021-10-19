import { Category } from 'src/categories/category.entity';
import { Race } from 'src/races/race.entity';
import { Rank } from 'src/ranks/rank.entity';
import { Subscription } from 'src/subscriptions/subscription.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('seasons')
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'number', type: 'integer' })
  number: number;

  @Column({ name: 'initial_date', type: 'timestamptz' })
  initialDate: Date;

  @Column({ name: 'final_date', type: 'timestamptz' })
  finalDate: Date;

  @Column({
    name: 'final_date_subscription',
    type: 'timestamptz',
  })
  finalDateSub: Date;

  @ManyToOne(() => Rank, (rank) => rank.seasons)
  @JoinColumn({ name: 'rank_id' })
  rank: Rank;

  @ManyToOne(() => Category, (category) => category.seasons)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Subscription, (subscription) => subscription.driver)
  @JoinColumn()
  subscriptions: Subscription[];

  @OneToMany(() => Race, (race) => race.driver)
  @JoinColumn()
  races: Race[];
}

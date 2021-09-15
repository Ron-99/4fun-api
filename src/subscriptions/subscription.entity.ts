import { Driver } from 'src/drivers/driver.entity';
import { Season } from 'src/seasons/season.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscription')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Driver, (driver) => driver.subscriptions)
  @JoinColumn()
  driver: Driver;

  @ManyToOne(() => Season, (season) => season.subscriptions)
  @JoinColumn()
  season: Season;
}

import { Driver } from 'src/drivers/driver.entity';
import { Season } from 'src/seasons/season.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscription')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Driver, (driver) => driver.subscriptions)
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;

  @ManyToOne(() => Season, (season) => season.subscriptions)
  @JoinColumn({ name: 'season_id' })
  season: Season;
}

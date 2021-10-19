import { Track } from './../tracks/track.entity';
import { Driver } from './../drivers/driver.entity';
import { Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Season } from 'src/seasons/season.entity';
export class Race {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'date_race', type: 'date' })
  dateRace: Date;

  @Column({ name: 'points', type: 'decimal' })
  points: number;

  @Column({ name: 'best_time' })
  bestTime: string;

  @ManyToOne(() => Driver, (driver) => driver.races)
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;

  @ManyToOne(() => Track, (track) => track.races)
  @JoinColumn({ name: 'track_id' })
  track: Track;

  @ManyToOne(() => Season, (season) => season.races)
  @JoinColumn({ name: 'season_id' })
  season: Season;
}

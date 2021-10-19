import { Race } from 'src/races/race.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'flag' })
  flag: string;

  @OneToMany(() => Race, (race) => race.driver)
  @JoinColumn()
  races: Race[];
}

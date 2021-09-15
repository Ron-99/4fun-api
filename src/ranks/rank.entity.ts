import { Season } from 'src/seasons/season.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ranks')
export class Rank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => Season, (season) => season.rank)
  @JoinColumn()
  seasons: Season[];
}

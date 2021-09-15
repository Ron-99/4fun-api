import { Season } from 'src/seasons/season.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'url_image' })
  urlImage: string;

  @OneToMany(() => Season, (season) => season.category)
  seasons: Season[];
}

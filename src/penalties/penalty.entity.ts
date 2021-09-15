import { Driver } from 'src/drivers/driver.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('penalties')
export class Penalty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'level', type: 'decimal' })
  level: number;

  @Column({ name: 'color', type: 'char', length: 7 })
  color: string;

  @Column({ name: 'description', type: 'varchar', length: 70 })
  description: string;

  @OneToMany(() => Driver, (driver) => driver.penalty)
  drivers: Driver[];
}

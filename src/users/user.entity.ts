import { Driver } from 'src/drivers/driver.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Roles } from './roles.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'role', type: 'enum', enum: Roles, default: Roles.User })
  role: Roles;

  @Column({ name: 'mobile_phone_number' })
  mobilePhoneNumber: string;

  @ManyToOne(() => Driver, (driver) => driver.users)
  @JoinColumn({ name: 'driver_id' })
  driver: Driver;
}

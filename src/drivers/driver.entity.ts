import { Penalty } from 'src/penalties/penalty.entity';
import { Race } from 'src/races/race.entity';
import { Subscription } from 'src/subscriptions/subscription.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('drivers')
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nickname', type: 'varchar', length: 50 })
  nickName: string;

  @Column({ name: 'number', type: 'char', length: 3 })
  number: string;

  @ManyToOne(() => Penalty, (penalty) => penalty.drivers)
  @JoinColumn({ name: 'penalty_id' })
  penalty: Penalty;

  @OneToMany(() => User, (user) => user.driver)
  @JoinColumn()
  users: User[];

  @OneToMany(() => Subscription, (subscription) => subscription.driver)
  @JoinColumn()
  subscriptions: Subscription[];

  @OneToMany(() => Race, (race) => race.driver)
  @JoinColumn()
  races: Race[];
}

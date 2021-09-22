import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { PenaltiesModule } from './penalties/penalties.module';
import { SeasonsModule } from './seasons/seasons.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { RanksModule } from './ranks/ranks.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Category } from './categories/category.entity';
import { Rank } from './ranks/rank.entity';
import { Season } from './seasons/season.entity';
import { Penalty } from './penalties/penalty.entity';
import { Driver } from './drivers/driver.entity';
import { Subscription } from './subscriptions/subscription.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        console.log(config.get<string>('DB_HOST'));
        console.log(config.get<number>('DB_PORT'));
        console.log(config.get<string>('DB_NAME'));
        console.log(config.get<string>('DB_USER'));
        console.log(config.get<string>('DB_PASS'));
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          database: config.get<string>('DB_NAME'),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASS'),
          logging: true,
          synchronize: true,
          entities: [
            User,
            Rank,
            Category,
            Season,
            Penalty,
            Driver,
            Subscription,
          ],
        };
      },
    }),
    UsersModule,
    DriversModule,
    PenaltiesModule,
    SeasonsModule,
    SubscriptionsModule,
    RanksModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

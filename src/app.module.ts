import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource, User, Settings } from 'shared-orm-library';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options, // Use shared database configuration
      synchronize: false, // Use migrations instead of auto-sync
    }),
    TypeOrmModule.forFeature([User, Settings]), // Use shared entities
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
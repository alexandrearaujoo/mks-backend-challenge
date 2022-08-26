import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgConfigAsync } from './config/ormConfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(OrgConfigAsync),
    UsersModule,
    MoviesModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

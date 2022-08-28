import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfigAsync } from './config/ormConfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(OrmConfigAsync),
    CacheModule.registerAsync<RedisClientOptions>({
      useFactory: () => ({
        store: redisStore,
        isCacheableValue: () => true,
        ttl: 120,
        url: process.env.REDIS_URL,
      }),
    }),
    UsersModule,
    MoviesModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

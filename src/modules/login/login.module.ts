import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../users/entities/user.entity';
import { UsersModule } from './../users/users.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtStrategy } from './strategies/jwt-strategy';
import { LocalStrategy } from './strategies/local-strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.SECRET_KEY as string,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  providers: [LoginService, LocalStrategy, JwtStrategy],
  controllers: [LoginController],
})
export class LoginModule {}

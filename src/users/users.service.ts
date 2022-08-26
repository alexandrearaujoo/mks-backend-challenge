import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async store(data: CreateUserDto) {
    const emailAlreadyExists = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (emailAlreadyExists)
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);

    const user = new User();
    user.email = data.email;
    user.name = data.name;
    user.password = data.password;

    this.userRepository.create(user);
    await this.userRepository.save(user);

    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async update(id: string, data: UpdateUserDto) {
    await this.findOne(id);

    const user = await this.userRepository.save({ ...data, id });

    return user;
  }

  async delete(id: string) {
    await this.findOne(id);

    await this.userRepository.delete(id);

    return;
  }
}

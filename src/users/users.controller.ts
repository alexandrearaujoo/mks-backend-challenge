import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { instanceToPlain } from 'class-transformer';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiTags,
  refs,
} from '@nestjs/swagger';
import {
  UserBody,
  UserBodyUpdate,
  UserResponse,
  UserResponseUpdate,
} from 'src/schemas/user.schema';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiExtraModels(UserBody, UserResponse)
  @ApiBody({ schema: { oneOf: refs(UserBody) } })
  @ApiCreatedResponse({ schema: { oneOf: refs(UserResponse) } })
  async create(@Body() data: CreateUserDto) {
    return instanceToPlain(await this.userService.store(data));
  }
  @Get()
  async index() {
    return instanceToPlain(await this.userService.findAll());
  }
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return instanceToPlain(await this.userService.findOne(id));
  }

  @Patch(':id')
  @ApiExtraModels(UserBodyUpdate, UserResponseUpdate)
  @ApiBody({ schema: { oneOf: refs(UserBodyUpdate) } })
  @ApiOkResponse({ schema: { oneOf: refs(UserResponseUpdate) } })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateUserDto,
  ) {
    return await this.userService.update(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.delete(id);
  }
}

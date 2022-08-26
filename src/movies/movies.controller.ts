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
  UseGuards,
  UseInterceptors,
  CacheInterceptor,
  CacheTTL,
} from '@nestjs/common';
import { MovieService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiTags,
  refs,
} from '@nestjs/swagger';
import {
  MovieBody,
  MovieResponse,
  MovieUpdateBody,
  MovieUpdateResponse,
} from './../schemas/movie.schema';

@ApiTags('Movie')
@UseGuards(AuthGuard('jwt'))
@Controller('movies')
export class MovieController {
  constructor(private readonly moviesService: MovieService) {}

  @Post()
  @ApiExtraModels(MovieBody, MovieResponse)
  @ApiBody({ schema: { oneOf: refs(MovieBody) } })
  @ApiCreatedResponse({
    schema: { anyOf: refs(MovieResponse) },
  })
  async create(@Body() data: CreateMovieDto) {
    return await this.moviesService.create(data);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  async findAll() {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.moviesService.findOne(id);
  }

  @Patch(':id')
  @Post()
  @ApiExtraModels(MovieUpdateBody, MovieUpdateResponse)
  @ApiBody({ schema: { oneOf: refs(MovieUpdateBody) } })
  @ApiOkResponse({
    schema: { anyOf: refs(MovieUpdateResponse) },
  })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateMovieDto,
  ) {
    return await this.moviesService.update(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.moviesService.delete(id);
  }
}

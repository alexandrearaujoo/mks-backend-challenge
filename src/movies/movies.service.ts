import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(data: CreateMovieDto) {
    const titleAlreadyExists = await this.movieRepository.findOne({
      where: { title: data.title },
    });

    if (titleAlreadyExists)
      throw new HttpException('Title already exists', HttpStatus.CONFLICT);

    const movie = new Movie();
    movie.title = data.title;
    movie.duration = data.duration;
    movie.category = data.category;
    movie.classification = data.classification;
    movie.coverImage = data.coverImage;

    this.movieRepository.create(movie);
    await this.movieRepository.save(movie);

    return movie;
  }

  async findAll() {
    return await this.movieRepository.find();
  }

  async findOne(id: string) {
    const movie = await this.movieRepository.findOne({ where: { id } });

    if (!movie) throw new NotFoundException('Movie not found');

    return movie;
  }

  async update(id: string, data: UpdateMovieDto) {
    const movie = await this.movieRepository.findOne({ where: { id } });

    if (!movie) throw new NotFoundException('Movie not found');

    const updatedMovie = await this.movieRepository.save({
      ...data,
      id: movie.id,
    });

    return updatedMovie;
  }

  async delete(id: string) {
    const movie = await this.movieRepository.findOne({ where: { id } });

    if (!movie) throw new NotFoundException('Movie not found');

    await this.movieRepository.delete(movie.id);

    return;
  }
}

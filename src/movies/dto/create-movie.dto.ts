import { IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsNotEmpty({ message: 'Duration is required' })
  @IsNumber()
  duration: number;

  @IsNotEmpty({ message: 'Category is required' })
  category: string;

  @IsNotEmpty({ message: 'Classification is required' })
  classification: string;

  @IsNotEmpty({ message: 'Cover image is required' })
  @IsUrl()
  coverImage: string;
}

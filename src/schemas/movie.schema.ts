import { ApiProperty, ApiTooManyRequestsResponse } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class MovieBody {
  @ApiProperty({
    description: 'Title',
    example: 'Filme tal',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Duration',
    example: 120,
  })
  @IsNumber()
  duration: number;

  @ApiProperty({
    description: 'Category',
    example: 'Ação',
  })
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Classification',
    example: '12 anos',
  })
  @IsString()
  classification: string;

  @ApiProperty({
    description: 'Cover Image',
    example: 'a',
  })
  @IsUrl()
  coverImage: string;
}

export class MovieResponse {
  @ApiProperty({
    description: 'ID',
    example: 'fsdf5d1sf51ds5f15ds1f5sd1f51ds5f',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Title',
    example: 'Filme tal',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Duration',
    example: 120,
  })
  @IsNumber()
  duration: number;

  @ApiProperty({
    description: 'Category',
    example: 'Ação',
  })
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Classification',
    example: '12 anos',
  })
  @IsString()
  classification: string;

  @ApiProperty({
    description: 'Cover Image',
    example: 'a',
  })
  @IsUrl()
  coverImage: string;
}

export class MovieUpdateBody {
  @ApiProperty({
    description: 'Title',
    example: 'Filme atualizado',
  })
  @IsString()
  title: string;
}

export class MovieUpdateResponse {
  @ApiProperty({
    description: 'ID',
    example: 'fsdf5d1sf51ds5f15ds1f5sd1f51ds5f',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Title',
    example: 'Filme atualizado',
  })
  @IsString()
  title: string;
}

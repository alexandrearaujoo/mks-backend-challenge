import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UserBody {
  @ApiProperty({
    description: 'Email',
    example: 'email@email.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Name',
    example: 'Alexandre',
  })
  @IsNumber()
  name: string;

  @ApiProperty({
    description: 'Password',
    example: '1234',
  })
  @IsString()
  password: string;
}

export class UserResponse {
  @ApiProperty({
    description: 'ID',
    example: 'hgdg15ds1gds1g5sdgfsg15d',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Email',
    example: 'email@email.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Name',
    example: 'Alexandre',
  })
  @IsNumber()
  name: string;

  @ApiProperty({
    description: 'Created At',
    example: '"2022-08-26T14:06:41.748Z"',
  })
  created_at: string;

  @ApiProperty({
    description: 'Updated At',
    example: '"2022-08-26T14:06:41.748Z"',
  })
  updated_at: string;
}

export class UserBodyUpdate {
  @ApiProperty({
    description: 'Email',
    example: 'emailatualizado@email.com',
    required: false,
  })
  @IsString()
  email: string;
}

export class UserResponseUpdate {
  @ApiProperty({
    description: 'ID',
    example: 'hgdg15ds1gds1g5sdgfsg15d',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Email',
    example: 'emailatualizado@email.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Updated At',
    example: '2022-08-26T14:06:48.748Z',
  })
  @IsString()
  updatedAt: string;
}

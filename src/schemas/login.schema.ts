import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginBody {
  @ApiProperty({
    description: 'Email',
    example: 'email@email.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Password',
    example: '1234',
  })
  @IsString()
  password: string;
}

export class LoginResponse {
  @ApiProperty({
    description: 'Token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  @IsString()
  token: string;
}

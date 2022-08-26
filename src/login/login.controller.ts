import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBody,
  ApiExtraModels,
  ApiOkResponse,
  ApiTags,
  refs,
} from '@nestjs/swagger';
import { LoginBody, LoginResponse } from 'src/schemas/login.schema';
import { LoginService } from './login.service';

@ApiTags('Login')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  @ApiExtraModels(LoginBody, LoginResponse)
  @ApiBody({ schema: { oneOf: refs(LoginBody) } })
  @ApiOkResponse({ schema: { oneOf: refs(LoginResponse) } })
  async login(@Req() req: any) {
    return await this.loginService.login(req.user);
  }
}

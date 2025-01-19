import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginValidateAuthDto } from './dto/login.dto';
import { RegisterAuthDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Регистрация пользователя
  @Post('/register')
  async register(@Body() dto: RegisterAuthDto) {
    return await this.authService.register(dto);
  }

  // Авторизация пользователя
  @Post('/login')
  async login(@Body() dto: LoginValidateAuthDto) {
    const user = await this.authService.validateUser(dto);
    if (!user) {
      throw new UnauthorizedException('Неверные учетные данные');
    }
    return await this.authService.login(user);
  }

  // Проверка на валидность токена
  @Get('check')
  async checkUser(@Headers('authorization') authorizationHeader: string) {
    if (!authorizationHeader) {
      throw new UnauthorizedException('Нет токена');
    }
    const token = authorizationHeader.replace('Bearer ', '');
    return this.authService.checkUser(token);
  }
}

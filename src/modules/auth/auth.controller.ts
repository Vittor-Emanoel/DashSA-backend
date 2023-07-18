import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { IsPublic } from 'src/shared/decorators/isPublic';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @HttpCode(HttpStatus.CREATED)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @IsPublic()
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}

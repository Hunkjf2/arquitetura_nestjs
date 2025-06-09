import { Controller, Body, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from 'src/dto/auth/loginDTO';
import { LoginService } from './login.service';

@ApiTags('Auth')
@Controller('auth')
export class LoginController  {

   constructor(private readonly loginService: LoginService){}

  @Post('login')
  @ApiOperation({ summary: 'Login da aplicação' })
  async login(@Body() data: LoginDTO, @Res() res: any): Promise<any> {
    return res.json(await this.loginService.authenticate(data, res));
  }

}

  


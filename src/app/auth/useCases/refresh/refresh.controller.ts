import { Controller, Body, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RefreshService } from './refresh.service';
import { RefreshTokenDTO } from 'src/dto/auth/RefreshTokenDTO';

@Controller('auth')
export class RefreshController  {
  constructor (private refreshService: RefreshService){}

  @Post('refresh')
  @ApiOperation({ summary: 'Refresh token da aplicação' })
  @ApiTags('Auth')
  async refreshToken(@Body() data: RefreshTokenDTO): Promise<any> {
    const { refresh_token } = data;
    return await this.refreshService.refreshToken(refresh_token)
  }

}

  


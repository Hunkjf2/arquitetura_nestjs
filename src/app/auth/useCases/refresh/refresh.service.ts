import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RefreshService {
  constructor(
    private readonly jwtService: JwtService
  ) {}

  async refreshToken(refresh_token: string): Promise<any> {
    const payload = await this.jwtService.verify(refresh_token);
    delete payload.iat
    delete payload.exp
    return {
      token: this.jwtService.sign(payload)
    };
  }

}
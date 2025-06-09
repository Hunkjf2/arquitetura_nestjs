import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDTO } from 'src/dto/auth/loginDTO';
import * as bcrypt from 'bcryptjs';
import { MenssageDefault } from 'src/enum/MenssageDefault';
import { JwtService } from '@nestjs/jwt';
import { IPrismaListarUsuarioRepository } from 'src/app/usuario/repository/listar/IPrismaListarUsuarioRepository';

@Injectable()
export class LoginService {
  constructor(
    private readonly prismaListarUsuarioRepository: IPrismaListarUsuarioRepository,
    private readonly jwtService: JwtService
  ) {}

  async authenticate(data: LoginDTO, res: any): Promise<any> {
    const { senha, login } = data
    let usuario = await this.prismaListarUsuarioRepository.findByLogin(login)
    if(!usuario){
        throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: MenssageDefault.SENHA_INVALIDA,},HttpStatus.BAD_REQUEST);
    }
    const isPasswordValid = bcrypt.compareSync(senha, usuario.password);
    if(!isPasswordValid){
        throw new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: MenssageDefault.SENHA_INVALIDA,},HttpStatus.BAD_REQUEST);
    }
    const infoUser = await this.generateToken(usuario)
    return await this.setResponseToken(res, infoUser);
  }

  async generateToken(usuario: any): Promise<any> {
    delete usuario.password
    const payload: any = { 
        ...usuario,
        nome: usuario.nome, 
        sub: usuario.id 
    };
    return {
        ...usuario,
        token: this.jwtService.sign(payload),
        refresh_token: this.jwtService.sign({ ...usuario, sub: usuario.id}, { expiresIn: process.env.TEMPO_TOKEN_REFRESH }),
    };
  }

  async setResponseToken(res: any, infoUser: any): Promise<any>{
    res.set('Authorization', infoUser.token);
    res.set('refresh_auth_token', infoUser.refresh_token);
    delete infoUser.refresh_token
    delete infoUser.token
    return infoUser
  }

}
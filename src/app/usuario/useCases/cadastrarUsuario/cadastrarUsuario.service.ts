import { Injectable } from '@nestjs/common';
import { UsuarioDTO } from 'src/dto/usuario/Usuario.dto';
import * as bcrypt from 'bcryptjs';
import { UsuarioListDTO } from 'src/dto/usuario/UsuarioList.dto';
import { IPrismaCadastrarUsuarioRepository } from '../../repository/cadastrar/IPrismaCadastrarUsuarioRepository';
import { IPrismaListarUsuarioRepository } from '../../repository/listar/IPrismaListarUsuarioRepository';

@Injectable()
export class CadastrarUsuarioService {
  constructor(
    private readonly prismaCadastrarUsuarioRepository: IPrismaCadastrarUsuarioRepository,
    private readonly prismaListarUsuarioRepository: IPrismaListarUsuarioRepository,
  ) {}

  async hashPassword(senha: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);
    return hashedPassword;
  }

  async create(data: UsuarioDTO): Promise<UsuarioListDTO> {
    let { password } = data
    data.password = await this.hashPassword(password);
    const usuario = await this.prismaCadastrarUsuarioRepository.createUsuario(data)
    return await this.prismaListarUsuarioRepository.findOneUsuario(usuario.id)
  }

}
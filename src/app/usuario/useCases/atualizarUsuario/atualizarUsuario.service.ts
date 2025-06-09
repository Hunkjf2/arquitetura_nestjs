import { Injectable } from '@nestjs/common';
import { UsuarioUpdateDTO } from 'src/dto/usuario/Usuario.dto';
import { UsuarioListDTO } from 'src/dto/usuario/UsuarioList.dto';
import { IPrismaAtualizarUsuarioRepository } from '../../repository/atualizar/IPrismaAtualizarUsuarioRepository';
import { IPrismaListarUsuarioRepository } from '../../repository/listar/IPrismaListarUsuarioRepository';

@Injectable()
export class AtualizarUsuarioService {
  constructor(
    private readonly prismaAtualizarUsuarioRepository: IPrismaAtualizarUsuarioRepository,
    private readonly prismaListarUsuarioRepository: IPrismaListarUsuarioRepository,
  ) {}

  async update(data: UsuarioUpdateDTO): Promise<UsuarioListDTO> {
    const { id } = data
    await this.prismaAtualizarUsuarioRepository.updateUsuario(data)
    return await this.prismaListarUsuarioRepository.findOneUsuario(id)
  }

}
import { Injectable } from '@nestjs/common';
import { PaginacaoDTO, PaginacaoResponseDTO } from 'src/dto/global/PaginacaoResponseDTO';
import { UsuarioListDTO } from 'src/dto/usuario/UsuarioList.dto';
import { IPrismaListarUsuarioRepository } from '../../repository/listar/IPrismaListarUsuarioRepository';

@Injectable()
export class ListarUsuarioService {
  constructor(private readonly prismaListarUsuarioRepository: IPrismaListarUsuarioRepository) {}

  async findAllUsuarioPaginate(query: PaginacaoDTO): Promise<PaginacaoResponseDTO> {
    return await this.prismaListarUsuarioRepository.listAllUsuarioPagination(query);
  }

  async findAllUsuario(): Promise<UsuarioListDTO[]> {
    return await this.prismaListarUsuarioRepository.listAllUsuario();
  }

  async findOneUsuario(id: number): Promise<any>{
    return await this.prismaListarUsuarioRepository.findOneUsuario(id);
  }

}
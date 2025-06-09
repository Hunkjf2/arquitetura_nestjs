import { Injectable } from '@nestjs/common';
import { PerfilListDTO } from '../../../../dto/perfil/perfilList.dto';
import { PaginacaoDTO, PaginacaoResponseDTO } from 'src/dto/global/PaginacaoResponseDTO';
import { IPrismaListarPerfilRepository } from '../../repository/listar/IPrismaListarPerfilRepository';

@Injectable()
export class ListarPerfilService {
  constructor(
    private readonly prismaListarPerfilRepository: IPrismaListarPerfilRepository
  ) {}

  async findAllPerfilPaginate(query: PaginacaoDTO): Promise<PaginacaoResponseDTO> {
    return await this.prismaListarPerfilRepository.listAllPagination(query);
  }

  async findAllPerfil(): Promise<PerfilListDTO[]> {
    return await this.prismaListarPerfilRepository.listAll();
  }

  async findOnePerfil(id: number): Promise<PerfilListDTO>{
    return await this.prismaListarPerfilRepository.findOne(id);
  }

}
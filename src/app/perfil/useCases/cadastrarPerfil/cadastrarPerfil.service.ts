import { Injectable } from '@nestjs/common';
import { PerfilDTO } from '../../../../dto/perfil/perfil.dto';
import { IPrismaCadastrarPerfilRepository } from '../../repository/cadastrar/IPrismaCadastrarPerfilRepository';
import { IPrismaListarPerfilRepository } from '../../repository/listar/IPrismaListarPerfilRepository';
import { PerfilListDTO } from 'src/dto/perfil/perfilList.dto';
import { IPrismaCadastrarRecursoRepository } from 'src/app/recurso/repository/cadastrar/IPrismaCadastrarRecursoRepository';

@Injectable()
export class CadastrarPerfilService {
  constructor(
    private readonly prismaCadastrarPerfilRepository: IPrismaCadastrarPerfilRepository,
    private readonly prismaListarPerfilRepository: IPrismaListarPerfilRepository,
    private readonly prismaCadastrarRecursoRepository: IPrismaCadastrarRecursoRepository,
  ) {}

  async create(data: PerfilDTO): Promise<PerfilListDTO> {
    const { descricao, recursos } = data;
    const perfil = await this.prismaCadastrarPerfilRepository.create(descricao);
    if(perfil){
      await this.prismaCadastrarRecursoRepository.create({ id: perfil.id, recursos: recursos });
    }
    return await this.prismaListarPerfilRepository.findOne(perfil.id)
  }

}
import { Injectable } from '@nestjs/common';
import { PerfilDTO } from '../../../../dto/perfil/perfil.dto';
import { IPrismaAtualizarPerfilRepository } from '../../repository/atualizar/IPrismaAtualizarPerfilRepository';
import { IPrismaListarPerfilRepository } from '../../repository/listar/IPrismaListarPerfilRepository';
import { IPrismaDeletarRecursoRepository } from 'src/app/recurso/repository/deletar/IPrismaDeletarRecursoRepository';
import { IPrismaCadastrarRecursoRepository } from 'src/app/recurso/repository/cadastrar/IPrismaCadastrarRecursoRepository';

@Injectable()
export class AtualizarPerfilService {
  constructor(
    private readonly prismaAtualizarPerfilRepository: IPrismaAtualizarPerfilRepository,
    private readonly prismaListarPerfilRepository: IPrismaListarPerfilRepository,
    private readonly prismaDeletarRecursoRepository: IPrismaDeletarRecursoRepository,
    private readonly prismaCadastrarRecursoRepository: IPrismaCadastrarRecursoRepository
  ) {}

  async update(data: PerfilDTO): Promise<any> {
    const { recursos, id } = data;
    await this.prismaAtualizarPerfilRepository.update(data);
    await this.prismaDeletarRecursoRepository.deletePerfilRecurso({id: id})
    await this.prismaCadastrarRecursoRepository.create({ id: id, recursos: recursos });
    return await this.prismaListarPerfilRepository.findOne(id)
  }

}
import { Injectable } from '@nestjs/common';
import { IPrismaDeletarPerfilRepository } from '../../repository/deletar/IPrismaDeletarPerfilRepository';
import { IPrismaDeletarRecursoRepository } from 'src/app/recurso/repository/deletar/IPrismaDeletarRecursoRepository';

@Injectable()
export class DeletarPerfilService {
  constructor(
    private readonly prismaDeletarPerfilRepository: IPrismaDeletarPerfilRepository,
    private readonly prismaDeletarRecursoRepository: IPrismaDeletarRecursoRepository
  ) {}

  async delete(id: number): Promise<void> {
    await this.prismaDeletarRecursoRepository.deletePerfilRecurso({ id });
    return await this.prismaDeletarPerfilRepository.delete(id);
  }

}
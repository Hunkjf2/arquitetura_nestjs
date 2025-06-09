import { Injectable } from '@nestjs/common';
import { RecursoDTO } from '../../../../dto/recursos/recurso.dto';
import { IPrismaListarRecursoRepository } from '../../repository/listar/IPrismaListarRecursoRepository';

@Injectable()
export class ListarRecursoService {
  constructor(private readonly prismaListarRecursoRepository: IPrismaListarRecursoRepository) {}

  async findAllRecurso(): Promise<RecursoDTO[]> {
    return await this.prismaListarRecursoRepository.listAll();
  }

}
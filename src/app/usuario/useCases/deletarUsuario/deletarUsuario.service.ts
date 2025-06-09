import { Injectable } from '@nestjs/common';
import { IPrismaDeletarUsuarioRepository } from '../../repository/deletar/IPrismaDeletarUsuarioRepository';

@Injectable()
export class DeletarUsuarioService {
  constructor(
    private readonly prismaDeletarUsuarioRepository: IPrismaDeletarUsuarioRepository
  ) {}

  async delete(id: number): Promise<void> {
    await this.prismaDeletarUsuarioRepository.deleteUsuario(id);
  }

}
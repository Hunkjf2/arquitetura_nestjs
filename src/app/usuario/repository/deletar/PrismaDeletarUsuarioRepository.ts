import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { IPrismaDeletarUsuarioRepository } from './IPrismaDeletarUsuarioRepository';

@Injectable()
export class PrismaDeletarUsuarioRepository implements IPrismaDeletarUsuarioRepository {

    constructor(private readonly prisma: PrismaService) { }

    async deleteUsuario(id: number): Promise<void> {
        await this.prisma.usuario.delete({
            where: { id },
        })
    }

}
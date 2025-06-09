import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { IPrismaDeletarPerfilRepository } from './IPrismaDeletarPerfilRepository';

@Injectable()
export class PrismaDeletarPerfilRepository implements IPrismaDeletarPerfilRepository {

    constructor(private readonly prisma: PrismaService) { }

    async delete(id: number): Promise<void> {
        await this.prisma.perfil.delete({
            where: { id },
        })
    }


}
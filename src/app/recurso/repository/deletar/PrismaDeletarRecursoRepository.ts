import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { RecursoDTO } from 'src/dto/recursos/recurso.dto';
import { IPrismaDeletarRecursoRepository } from './IPrismaDeletarRecursoRepository';

@Injectable()
export class PrismaDeletarRecursoRepository implements IPrismaDeletarRecursoRepository {

    constructor(private readonly prisma: PrismaService) { }

    async deletePerfilRecurso({id} : RecursoDTO): Promise<void> {
        await this.prisma.perfilRecurso.deleteMany({
            where: {
                perfil_id: id
            }
        })
    }

}
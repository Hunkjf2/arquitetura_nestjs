import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { RecursoDTO } from 'src/dto/recursos/recurso.dto';
import { IPrismaCadastrarRecursoRepository } from './IPrismaCadastrarRecursoRepository';

@Injectable()
export class PrismaCadastrarRecursoRepository implements IPrismaCadastrarRecursoRepository {

    constructor(private readonly prisma: PrismaService) { }

    async create(data: RecursoDTO): Promise<any> { 
        const { id, recursos } = data;
        return await Promise.all(
            recursos.map((item: any) =>
                this.prisma.perfilRecurso.create({ data: {
                    recurso_id: item.id,
                    perfil_id: id
                }})
            )
        )
    }

}
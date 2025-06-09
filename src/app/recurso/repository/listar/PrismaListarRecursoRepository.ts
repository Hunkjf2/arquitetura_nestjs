import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { IPrismaListarRecursoRepository } from './IPrismaListarRecursoRepository';

@Injectable()
export class PrismaListarRecursoRepository implements IPrismaListarRecursoRepository {

    constructor(private readonly prisma: PrismaService) { }

    async listAll(): Promise<any[]> {
        return await this.prisma.recurso.findMany();
    }

}
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { PerfilDTO } from 'src/dto/perfil/perfil.dto';
import { IPrismaAtualizarPerfilRepository } from './IPrismaAtualizarPerfilRepository';

@Injectable()
export class PrismaAtualizarPerfilRepository implements IPrismaAtualizarPerfilRepository {

    constructor(private readonly prisma: PrismaService) { }

    async update(dados: PerfilDTO): Promise<void> {
        const { descricao, id } = dados;
        await this.prisma.perfil.update({ 
         where: {
            id,
         },
         data: {
            descricao
        }})
    }

}
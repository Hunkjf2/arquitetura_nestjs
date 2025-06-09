import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { IPrismaCadastrarPerfilRepository } from './IPrismaCadastrarPerfilRepository';
import { PerfilDTO } from 'src/dto/perfil/perfil.dto';

@Injectable()
export class PrismaCadastrarPerfilRepository implements IPrismaCadastrarPerfilRepository {

    constructor(private readonly prisma: PrismaService) { }

    async create(descricao: string): Promise<PerfilDTO> {
        return await this.prisma.perfil.create({ data: {
            descricao
        }})
    }

}
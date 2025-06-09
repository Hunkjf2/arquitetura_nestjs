import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { PerfilListDTO } from '../../../../dto/perfil/perfilList.dto';
import QueryPerfil from 'src/utils/queryPerfil';
import { PaginacaoDTO, PaginacaoResponseDTO } from 'src/dto/global/PaginacaoResponseDTO';
import { IPrismaListarPerfilRepository } from './IPrismaListarPerfilRepository';

@Injectable()
export class PrismaListarPerfilRepository implements IPrismaListarPerfilRepository {

    constructor(private readonly prisma: PrismaService) { }

    async listAllPagination(data: PaginacaoDTO): Promise<PaginacaoResponseDTO> {
        const { page, pageSize, search } = data;
        const where = search
            ? {
                OR: [
                    { descricao: { contains: search, mode: 'insensitive' as const } },
                ].filter(Boolean),
            }
            : {};
        const skip = (parseInt(page) - 1) * parseInt(pageSize);
        const perfis = await this.prisma.perfil.findMany({
            skip,
            take: parseInt(pageSize),
            where,
            select: {
                id: true,
                descricao: true,
                createdAt: true,
                updatedAt: true
            },
        });
        const totalRecords = await this.prisma.perfil.count({ where });
        return { data: perfis, total: totalRecords };
    }

    async listAll(): Promise<PerfilListDTO[]> {
        return await this.prisma.perfil.findMany({
            select: QueryPerfil.select()
        });
    }

    async findOne(id: number): Promise<PerfilListDTO> {
        return await this.prisma.perfil.findFirst({
            where: { id },
            select: QueryPerfil.select()
        });
    }

}
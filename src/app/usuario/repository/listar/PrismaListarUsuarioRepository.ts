import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import queryUsuario from 'src/utils/queryUsuario';
import { PaginacaoResponseDTO } from 'src/dto/global/PaginacaoResponseDTO';
import { IPrismaListarUsuarioRepository } from './IPrismaListarUsuarioRepository';

@Injectable()
export class PrismaListarUsuarioRepository implements IPrismaListarUsuarioRepository {

    constructor(private readonly prisma: PrismaService) { }

    async listAllUsuarioPagination(data: any): Promise<PaginacaoResponseDTO> {
        const { page, pageSize, search } = data;
        const where = search
            ? {
                OR: [
                    { nome: { contains: search, mode: 'insensitive' as const } },
                    { email: { contains: search, mode: 'insensitive' as const } },
                ].filter(Boolean),
            }
            : {};
        const skip = (parseInt(page) - 1) * parseInt(pageSize);
        const usuarios = await this.prisma.usuario.findMany({
            skip,
            take: parseInt(pageSize),
            where,
            select: {
                id: true,
                nome: true,
                email: true,
            },
        });
        const totalRecords = await this.prisma.usuario.count({ where });
        return { data: usuarios, total: totalRecords };
    }

    async listAllUsuario(): Promise<any[]> {
        return await this.prisma.usuario.findMany({
            select: queryUsuario.select()
        });
    }

    async findOneUsuario(id: number): Promise<any> {
        return await this.prisma.usuario.findFirst({
            where: { id },
            select: queryUsuario.select()
        });
    }

    async findByLogin(login: string): Promise<any> {
        return await this.prisma.usuario.findFirst({
            select: {
                id: true, nome: true, email: true, login: true, password: true, perfils: {
                    select: {
                        id: true,
                        descricao: true,
                        perfilRecurso: {
                            select: {
                                recurso: {
                                    select: {
                                        id: true,
                                        descricao: true,
                                        role: true
                                    }
                                }
                            }
                        }
                    }
                }
            },
            where: {
                login
            }
        })
    }

}
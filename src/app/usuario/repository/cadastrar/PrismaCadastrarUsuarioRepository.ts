import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { IPrismaCadastrarUsuarioRepository } from './IPrismaCadastrarUsuarioRepository';
import { UsuarioDTO } from 'src/dto/usuario/Usuario.dto';

@Injectable()
export class PrismaCadastrarUsuarioRepository implements IPrismaCadastrarUsuarioRepository {

    constructor(private readonly prisma: PrismaService) { }

    async createUsuario(data: UsuarioDTO): Promise<UsuarioDTO> {
           return await this.prisma.usuario.create({ data: data })
    }

}
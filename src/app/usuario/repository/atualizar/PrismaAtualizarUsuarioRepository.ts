import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { UsuarioDTO } from 'src/dto/usuario/Usuario.dto';
import { IPrismaAtualizarUsuarioRepository } from './IPrismaAtualizarUsuarioRepository';

@Injectable()
export class PrismaAtualizarUsuarioRepository implements IPrismaAtualizarUsuarioRepository {

    constructor(private readonly prisma: PrismaService) { }

    async updateUsuario(data: UsuarioDTO): Promise<void> {
        const { id, email, id_perfil, login, nome } = data
        await this.prisma.usuario.update({ 
         where: {
            id,
         },
         data: {
            email, id_perfil, login, nome
         }
        })
    }

}
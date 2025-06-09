import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { AtualizarUsuarioController } from "../atualizarUsuario.controller";
import { AtualizarUsuarioService } from "../atualizarUsuario.service";
import { IPrismaAtualizarUsuarioRepository } from "src/app/usuario/repository/atualizar/IPrismaAtualizarUsuarioRepository";
import { PrismaAtualizarUsuarioRepository } from "src/app/usuario/repository/atualizar/PrismaAtualizarUsuarioRepository";
import { ListarUsuarioModule } from "../../listarUsuario/module/listarUsuario.module";

@Module({
    imports: [
        PrismaModule,
        ListarUsuarioModule
    ],
    controllers: [AtualizarUsuarioController],
    providers: [
        AtualizarUsuarioService,
        {
            provide: IPrismaAtualizarUsuarioRepository,
            useClass: PrismaAtualizarUsuarioRepository
        }
    ],
})

export class AtualizarUsuarioModule {}
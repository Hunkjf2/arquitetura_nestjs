import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { ListarUsuarioService } from "../listarUsuario.service";
import { ListarUsuarioController } from "../listarUsuario.controller";
import { IPrismaListarUsuarioRepository } from "src/app/usuario/repository/listar/IPrismaListarUsuarioRepository";
import { PrismaListarUsuarioRepository } from "src/app/usuario/repository/listar/PrismaListarUsuarioRepository";

@Module({
    imports: [PrismaModule],
    controllers: [ListarUsuarioController],
    providers: [
        ListarUsuarioService,
        {
            provide: IPrismaListarUsuarioRepository,
            useClass: PrismaListarUsuarioRepository
        }
    ],
    exports: [
        {
            provide: IPrismaListarUsuarioRepository,
            useClass: PrismaListarUsuarioRepository
        }
    ]
})

export class ListarUsuarioModule {}
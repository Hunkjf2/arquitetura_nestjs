import { Module } from "@nestjs/common";
import { ListarPerfilController } from "../listarPerfil.controller";
import { ListarPerfilService } from "../listarPerfil.service";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { PrismaListarPerfilRepository } from "src/app/perfil/repository/listar/PrismaListarPerfilRepository";
import { IPrismaListarPerfilRepository } from "src/app/perfil/repository/listar/IPrismaListarPerfilRepository";

@Module({
    imports: [
        PrismaModule
    ],
    controllers: [ListarPerfilController],
    providers: [
        ListarPerfilService,
        {
            provide: IPrismaListarPerfilRepository,
            useClass: PrismaListarPerfilRepository
        }
    ],
    exports: [
        {
            provide: IPrismaListarPerfilRepository,
            useClass: PrismaListarPerfilRepository
        }
    ]
})

export class ListarPerfilModule {}
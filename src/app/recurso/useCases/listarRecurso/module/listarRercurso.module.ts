import { Module } from "@nestjs/common";
import { ListarRecursoController } from "../listarRecurso.controller";
import { ListarRecursoService } from "../listarRecurso.service";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { IPrismaListarRecursoRepository } from "src/app/recurso/repository/listar/IPrismaListarRecursoRepository";
import { PrismaListarRecursoRepository } from "src/app/recurso/repository/listar/PrismaListarRecursoRepository";

@Module({
    imports: [PrismaModule],
    controllers: [ListarRecursoController],
    providers: [
        ListarRecursoService,
        {
            provide: IPrismaListarRecursoRepository,
            useClass: PrismaListarRecursoRepository
        }
    ],
    exports: [
        {
            provide: IPrismaListarRecursoRepository,
            useClass: PrismaListarRecursoRepository
        }
    ]
})

export class ListarRecursoModule {}
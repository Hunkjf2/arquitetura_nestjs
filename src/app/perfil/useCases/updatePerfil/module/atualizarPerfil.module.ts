import { Module } from "@nestjs/common";
import { ListarRecursoModule } from "src/app/recurso/useCases/listarRecurso/module/listarRercurso.module";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { AtualizarPerfilController } from "../atualizarPerfil.controller";
import { AtualizarPerfilService } from "../atualizarPerfil.service";
import { ListarPerfilModule } from "../../listarPerfil/module/listarPerfil.module";
import { IPrismaAtualizarPerfilRepository } from "src/app/perfil/repository/atualizar/IPrismaAtualizarPerfilRepository";
import { PrismaAtualizarPerfilRepository } from "src/app/perfil/repository/atualizar/PrismaAtualizarPerfilRepository";
import { CadastrarRecursoModule } from "src/app/recurso/useCases/cadastrarRecurso/module/cadastrarRecurso.module";
import { DeletarRecursoModule } from "src/app/recurso/useCases/deletarRecurso/module/deletarRecurso.module";

@Module({
    imports: [
        PrismaModule,
        ListarRecursoModule,
        ListarPerfilModule,
        CadastrarRecursoModule,
        DeletarRecursoModule
    ],
    controllers: [AtualizarPerfilController],
    providers: [
        AtualizarPerfilService,
        {
            provide: IPrismaAtualizarPerfilRepository,
            useClass: PrismaAtualizarPerfilRepository
        }
    ]
})

export class AtualizarPerfilModule {}
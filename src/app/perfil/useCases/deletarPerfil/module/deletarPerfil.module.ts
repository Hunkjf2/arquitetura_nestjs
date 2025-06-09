import { Module } from "@nestjs/common";
import { DeletarPerfilController } from "../deletarPerfil.controller";
import { DeletarPerfilService } from "../deletarPerfil.service";
import { ListarRecursoModule } from "src/app/recurso/useCases/listarRecurso/module/listarRercurso.module";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { IPrismaDeletarPerfilRepository } from "src/app/perfil/repository/deletar/IPrismaDeletarPerfilRepository";
import { PrismaDeletarPerfilRepository } from "src/app/perfil/repository/deletar/PrismaDeletarPerfilRepository";
import { DeletarRecursoModule } from "src/app/recurso/useCases/deletarRecurso/module/deletarRecurso.module";

@Module({
    imports: [
        PrismaModule,
        ListarRecursoModule,
        DeletarRecursoModule
    ],
    controllers: [
        DeletarPerfilController
    ],
    providers: [
        DeletarPerfilService,
        {
            provide: IPrismaDeletarPerfilRepository,
            useClass: PrismaDeletarPerfilRepository
        }
    ],
})

export class DeletarPerfilModule {}
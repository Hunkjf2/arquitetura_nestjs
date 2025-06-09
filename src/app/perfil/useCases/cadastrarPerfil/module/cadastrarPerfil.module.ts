import { Module } from "@nestjs/common";
import { CadastrarPerfilController } from "../cadastrarPerfil.controller";
import { CadastrarPerfilService } from "../cadastrarPerfil.service";
import { ListarRecursoModule } from "src/app/recurso/useCases/listarRecurso/module/listarRercurso.module";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { ListarPerfilModule } from "../../listarPerfil/module/listarPerfil.module";
import { IPrismaCadastrarPerfilRepository } from "src/app/perfil/repository/cadastrar/IPrismaCadastrarPerfilRepository";
import { PrismaCadastrarPerfilRepository } from "src/app/perfil/repository/cadastrar/PrismaCadastrarPerfilRepository";
import { CadastrarRecursoModule } from "src/app/recurso/useCases/cadastrarRecurso/module/cadastrarRecurso.module";

@Module({
    imports: [
        PrismaModule,
        ListarRecursoModule,
        ListarPerfilModule,
        CadastrarRecursoModule
    ],
    controllers: [CadastrarPerfilController],
    providers: [
        CadastrarPerfilService,
        {
            provide: IPrismaCadastrarPerfilRepository,
            useClass: PrismaCadastrarPerfilRepository
        }
    ]
})

export class CadastrarPerfilModule {}
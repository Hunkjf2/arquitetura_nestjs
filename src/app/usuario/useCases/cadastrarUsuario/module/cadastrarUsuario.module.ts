import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { CriarUsuarioController } from "../cadastrarUsuario.controller";
import { CadastrarUsuarioService } from "../cadastrarUsuario.service";
import { IPrismaCadastrarUsuarioRepository } from "src/app/usuario/repository/cadastrar/IPrismaCadastrarUsuarioRepository";
import { PrismaCadastrarUsuarioRepository } from "src/app/usuario/repository/cadastrar/PrismaCadastrarUsuarioRepository";
import { ListarUsuarioModule } from "../../listarUsuario/module/listarUsuario.module";

@Module({
    imports: [
        PrismaModule,
        ListarUsuarioModule
    ],
    controllers: [CriarUsuarioController],
    providers: [
        CadastrarUsuarioService,
        {
            provide: IPrismaCadastrarUsuarioRepository,
            useClass: PrismaCadastrarUsuarioRepository
        }
    ],
})

export class CadastrarUsuarioModule {}
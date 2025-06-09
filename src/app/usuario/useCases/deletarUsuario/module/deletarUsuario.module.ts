import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { DeletarUsuarioService } from "../deletarUsuario.service";
import { DeletarUsuarioController } from "../deletarUsuario.controller";
import { IPrismaDeletarUsuarioRepository } from "src/app/usuario/repository/deletar/IPrismaDeletarUsuarioRepository";
import { PrismaDeletarUsuarioRepository } from "src/app/usuario/repository/deletar/PrismaDeletarUsuarioRepository";

@Module({
    imports: [PrismaModule],
    controllers: [DeletarUsuarioController],
    providers: [
        DeletarUsuarioService,
        {
            provide: IPrismaDeletarUsuarioRepository,
            useClass: PrismaDeletarUsuarioRepository
        }
    ],
})

export class DeletarUsuarioModule {}
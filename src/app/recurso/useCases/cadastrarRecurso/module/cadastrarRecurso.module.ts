import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { IPrismaCadastrarRecursoRepository } from "src/app/recurso/repository/cadastrar/IPrismaCadastrarRecursoRepository";
import { PrismaCadastrarRecursoRepository } from "src/app/recurso/repository/cadastrar/PrismaCadastrarRecursoRepository";

@Module({
    imports: [PrismaModule],
    providers: [
        {
            provide: IPrismaCadastrarRecursoRepository,
            useClass: PrismaCadastrarRecursoRepository
        }
    ],
    exports: [
        {
            provide: IPrismaCadastrarRecursoRepository,
            useClass: PrismaCadastrarRecursoRepository
        }
    ]
})

export class CadastrarRecursoModule {}
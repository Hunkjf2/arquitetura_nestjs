import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { IPrismaDeletarRecursoRepository } from "src/app/recurso/repository/deletar/IPrismaDeletarRecursoRepository";
import { PrismaDeletarRecursoRepository } from "src/app/recurso/repository/deletar/PrismaDeletarRecursoRepository";

@Module({
    imports: [PrismaModule],
    providers: [
        {
            provide: IPrismaDeletarRecursoRepository,
            useClass: PrismaDeletarRecursoRepository
        }
    ],
    exports: [
        {
            provide: IPrismaDeletarRecursoRepository,
            useClass: PrismaDeletarRecursoRepository
        }
    ]
})

export class DeletarRecursoModule {}
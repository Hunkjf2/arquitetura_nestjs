import { RecursoDTO } from "../../../../dto/recursos/recurso.dto";

export abstract class IPrismaListarRecursoRepository {
    abstract listAll(): Promise<RecursoDTO[]>
}
import { RecursoDTO } from "../../../../dto/recursos/recurso.dto";

export abstract class IPrismaCadastrarRecursoRepository {
    abstract create(data: RecursoDTO): Promise<RecursoDTO>
}
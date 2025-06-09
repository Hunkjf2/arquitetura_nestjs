import { RecursoDTO } from "../../../../dto/recursos/recurso.dto";

export abstract class IPrismaDeletarRecursoRepository {
    abstract deletePerfilRecurso({ id }: RecursoDTO): Promise<void>
}
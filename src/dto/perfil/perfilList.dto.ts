class RecursoDTO {
    id: number;
    descricao: string;
    role: string;
}
  
class PerfilRecursoDTO {
    recurso: RecursoDTO;
}
  
export class PerfilListDTO {
    id: number;
    descricao: string;
    perfilRecurso : PerfilRecursoDTO[];
}
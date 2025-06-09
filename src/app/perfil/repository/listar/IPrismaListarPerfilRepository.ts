import { PaginacaoDTO, PaginacaoResponseDTO } from "src/dto/global/PaginacaoResponseDTO";
import { PerfilListDTO } from "src/dto/perfil/perfilList.dto";

export abstract class IPrismaListarPerfilRepository {
    abstract listAllPagination(data: PaginacaoDTO): Promise<PaginacaoResponseDTO>
    abstract listAll(): Promise<PerfilListDTO[]>
    abstract findOne(id: number): Promise<PerfilListDTO>
}

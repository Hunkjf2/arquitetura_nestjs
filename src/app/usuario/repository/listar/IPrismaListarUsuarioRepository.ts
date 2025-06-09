import { PaginacaoDTO, PaginacaoResponseDTO } from "src/dto/global/PaginacaoResponseDTO";
import { UsuarioListDTO } from "src/dto/usuario/UsuarioList.dto";

export abstract class IPrismaListarUsuarioRepository {
    abstract listAllUsuarioPagination(data: PaginacaoDTO): Promise<PaginacaoResponseDTO>
    abstract listAllUsuario(): Promise<UsuarioListDTO[]>
    abstract findOneUsuario(id: number): Promise<UsuarioListDTO>
    abstract findByLogin(login: string): Promise<any>
}
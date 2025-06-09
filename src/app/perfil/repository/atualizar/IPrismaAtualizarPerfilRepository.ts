import { PerfilDTO } from "src/dto/perfil/perfil.dto";

export abstract class IPrismaAtualizarPerfilRepository {
    abstract update(dados: PerfilDTO): Promise<void>
}
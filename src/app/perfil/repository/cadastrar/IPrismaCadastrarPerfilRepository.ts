import { PerfilDTO } from "src/dto/perfil/perfil.dto";

export abstract class IPrismaCadastrarPerfilRepository {
    abstract create(descricao: string): Promise<PerfilDTO>
}
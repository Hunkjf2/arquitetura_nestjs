import { UsuarioDTO } from "src/dto/usuario/Usuario.dto";

export abstract class IPrismaCadastrarUsuarioRepository {
    abstract createUsuario(data: UsuarioDTO): Promise<UsuarioDTO>
}
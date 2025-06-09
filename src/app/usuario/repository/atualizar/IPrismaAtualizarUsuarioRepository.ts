import { UsuarioUpdateDTO } from "src/dto/usuario/Usuario.dto";

export abstract class IPrismaAtualizarUsuarioRepository {
    abstract updateUsuario(data: UsuarioUpdateDTO): Promise<void>
}
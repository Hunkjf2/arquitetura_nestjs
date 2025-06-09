export abstract class IPrismaDeletarUsuarioRepository {
    abstract deleteUsuario(id: number): Promise<void>
}
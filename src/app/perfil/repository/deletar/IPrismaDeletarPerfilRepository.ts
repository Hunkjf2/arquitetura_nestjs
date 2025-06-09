export abstract class IPrismaDeletarPerfilRepository {
    abstract delete(data: any): Promise<void>
}
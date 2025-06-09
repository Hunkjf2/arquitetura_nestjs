import { PerfilListDTO } from "src/dto/perfil/perfilList.dto";

export class UsuarioListDTO {
    id: number;
    nome: string;
    email: string;
    login: string;
    perfis: PerfilListDTO
}
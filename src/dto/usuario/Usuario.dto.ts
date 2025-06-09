import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UsuarioDTO {

    id?: number;

    @IsNotEmpty({
        message: 'Favor informe a nome!',
    })
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Joe Doe',
    })
    nome: string;

    @IsNotEmpty({
        message: 'Favor informe o email!',
    })
    @IsEmail({}, {
        message: 'O email informado não é válido!',
    })
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Joe Doe',
    })
    email: string;

    @IsNotEmpty({
        message: 'Favor informe o login!',
    })
    @ApiProperty({
        description: 'Login do usuário',
        example: 'teste.teste',
    })
    login: string;

    @IsNotEmpty({
        message: 'Favor informe a senha!',
    })
    @ApiProperty({
        description: 'Senha do usuário',
        example: '0000000000',
    })
    password: string;
    
    @IsNotEmpty({
        message: 'Favor informe o id do perfil!',
    })
    @ApiProperty({
        description: 'ID do perfil',
        example: '0000000000',
    })
    id_perfil: number;
}

export class UsuarioUpdateDTO extends OmitType(UsuarioDTO, ['password'] as const) {
    password?: string;
}
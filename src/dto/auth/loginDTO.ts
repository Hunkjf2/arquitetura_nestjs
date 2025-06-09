import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDTO {
    @IsNotEmpty({
        message: 'Favor informe o login!',
      })
      @ApiProperty({
        description: 'Nome de usuário ou e-mail para autenticação.',
        example: 'xxxxxxx',
      })
      login: string;
    
      @IsNotEmpty({
        message: 'Favor informe a senha!',
      })
      @ApiProperty({
        description: 'Senha do usuário para autenticação.',
        example: 'xxxxxxxx',
      })
      senha: string;
}
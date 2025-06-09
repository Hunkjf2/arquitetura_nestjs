import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CadastrarUsuarioService } from "./cadastrarUsuario.service";
import { UsuarioDTO } from "src/dto/usuario/Usuario.dto";
import { UsuarioListDTO } from "src/dto/usuario/UsuarioList.dto";
import { JwtAuthGuard } from "src/middlewares/jwt-auth.guard";
import { RolesGuard } from "src/middlewares/roles.guard";
import { Roles } from "src/middlewares/decoretor.guard";


@ApiTags('Usuário')
@Controller('usuario')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class CriarUsuarioController {

    constructor(
        private readonly cadastrarUsuarioService: CadastrarUsuarioService){
    }

    @Post()
    @ApiOperation({ summary: 'Cadastrar Usuário' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_CADASTRAR_USUARIO']) 
    async create(@Body() usuario: UsuarioDTO): Promise<UsuarioListDTO> {
        try {
            return await this.cadastrarUsuarioService.create(usuario)
          } catch (error: any) {
            throw error;
        }
    }




}
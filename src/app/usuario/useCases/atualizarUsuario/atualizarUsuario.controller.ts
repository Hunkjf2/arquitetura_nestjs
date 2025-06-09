import { Body, Controller, Param, ParseIntPipe, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UsuarioUpdateDTO } from "src/dto/usuario/Usuario.dto";
import { UsuarioListDTO } from "src/dto/usuario/UsuarioList.dto";
import { JwtAuthGuard } from "src/middlewares/jwt-auth.guard";
import { RolesGuard } from "src/middlewares/roles.guard";
import { Roles } from "src/middlewares/decoretor.guard";
import { AtualizarUsuarioService } from "./atualizarUsuario.service";


@ApiTags('Usuário')
@Controller('usuario')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class AtualizarUsuarioController {

    constructor(
        private readonly atualizarUsuarioService: AtualizarUsuarioService){
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar Usuário' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_ATUALIZAR_USUARIO']) 
    async update(@Body() usuario: UsuarioUpdateDTO, @Param('id', ParseIntPipe) id: number): Promise<UsuarioListDTO> {
        try {
            usuario.id = id
            return await this.atualizarUsuarioService.update(usuario)
          } catch (error: any) {
            throw error;
        }
    }

}
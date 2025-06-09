import { Controller, Delete, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { DeletarUsuarioService } from "./deletarUsuario.service";
import { JwtAuthGuard } from "src/middlewares/jwt-auth.guard";
import { RolesGuard } from "src/middlewares/roles.guard";
import { Roles } from "src/middlewares/decoretor.guard";

@ApiTags('Usuário')
@Controller('usuario')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class DeletarUsuarioController {

    constructor(
        private readonly deletarUsuarioService: DeletarUsuarioService){
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar Usuário' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_DELETAR_USUARIO']) 
    async create(@Param('id', ParseIntPipe) id: number): Promise<void> {
        try {
            return await this.deletarUsuarioService.delete(id);
        } catch (error: any) {
            throw error;
        }
    }

}
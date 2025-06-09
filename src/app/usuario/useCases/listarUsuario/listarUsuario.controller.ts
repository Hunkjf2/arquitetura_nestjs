import { Controller, Param, Get, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginacaoDTO, PaginacaoResponseDTO } from 'src/dto/global/PaginacaoResponseDTO';
import { ListarUsuarioService } from './listarUsuario.service';
import { UsuarioListDTO } from 'src/dto/usuario/UsuarioList.dto';
import { JwtAuthGuard } from 'src/middlewares/jwt-auth.guard';
import { RolesGuard } from 'src/middlewares/roles.guard';
import { Roles } from 'src/middlewares/decoretor.guard';

@ApiTags('Usuário')
@Controller('usuario')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class ListarUsuarioController {

    constructor(
        private readonly listarUsuarioService: ListarUsuarioService){
    }

    @Get()
    @ApiOperation({ summary: 'Listar Todos Usuários' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_LISTAR_USUARIO']) 
    async listAllPerfil(): Promise<any> {
        try {
            return await this.listarUsuarioService.findAllUsuario();
          } catch (error: any) {
            throw error;
        }
    }

    @Get('paginate')
    @ApiOperation({ summary: 'Listar Todos Usuários Paginados' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_LISTAR_USUARIO'])
    async listAllPerfilPagination(@Query() query: PaginacaoDTO): Promise<PaginacaoResponseDTO> {
        try {
            return await this.listarUsuarioService.findAllUsuarioPaginate(query);
          } catch (error: any) {
            throw error;
        }
    }

    @Get(':id')
    @ApiOperation({ summary: 'Listar Um Usuário' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_LISTAR_USUARIO'])
    async listOnePerfil(@Param('id', ParseIntPipe) id: number): Promise<UsuarioListDTO> {
        try {
            return await this.listarUsuarioService.findOneUsuario(id);
          } catch (error: any) {
            throw error;
        }
    }

}
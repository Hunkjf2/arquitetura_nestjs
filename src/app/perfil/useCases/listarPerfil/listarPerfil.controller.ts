import { Controller, Param, Get, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListarPerfilService } from './listarPerfil.service';
import { PerfilListDTO } from '../../../../dto/perfil/perfilList.dto';
import { PaginacaoDTO, PaginacaoResponseDTO } from 'src/dto/global/PaginacaoResponseDTO';
import { JwtAuthGuard } from 'src/middlewares/jwt-auth.guard';
import { Roles } from 'src/middlewares/decoretor.guard';
import { RolesGuard } from 'src/middlewares/roles.guard';

@ApiTags('Perfil')
@Controller('perfil')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class ListarPerfilController {

    constructor(
        private readonly listarPerfilService: ListarPerfilService){
    }

    @Get()
    @ApiOperation({ summary: 'Listar Todos Perfis' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_LISTAR_PERFIL']) 
    async listAllPerfil(): Promise<any> {
        try {
            return await this.listarPerfilService.findAllPerfil();
          } catch (error: any) {
            throw error;
        }
    }

    @Get('paginate')
    @ApiOperation({ summary: 'Listar Todos Perfis Paginados' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_LISTAR_PERFIL']) 
    async listAllPerfilPagination(@Query() query: PaginacaoDTO): Promise<PaginacaoResponseDTO> {
        try {
            return await this.listarPerfilService.findAllPerfilPaginate(query);
          } catch (error: any) {
            throw error;
        }
    }

    @Get(':id')
    @ApiOperation({ summary: 'Listar Um Perfil' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_LISTAR_PERFIL']) 
    async listOnePerfil(@Param('id', ParseIntPipe) id: number): Promise<PerfilListDTO> {
        try {
            return await this.listarPerfilService.findOnePerfil(id);
          } catch (error: any) {
            throw error;
        }
    }

}
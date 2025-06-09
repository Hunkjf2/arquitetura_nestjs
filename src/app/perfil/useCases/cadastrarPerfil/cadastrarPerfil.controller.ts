import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PerfilDTO } from '../../../../dto/perfil/perfil.dto';
import { CadastrarPerfilService } from './cadastrarPerfil.service';
import { JwtAuthGuard } from 'src/middlewares/jwt-auth.guard';
import { RolesGuard } from 'src/middlewares/roles.guard';
import { Roles } from 'src/middlewares/decoretor.guard';
import { PerfilListDTO } from 'src/dto/perfil/perfilList.dto';

@ApiTags('Perfil')
@Controller('perfil')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class CadastrarPerfilController {

    constructor(
        private readonly cadastrarPerfilService: CadastrarPerfilService){
    }

    @Post()
    @ApiOperation({ summary: 'Cadastrar Perfil' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_CADASTRAR_PERFIL']) 
    async create(@Body() perfil: PerfilDTO): Promise<PerfilListDTO> {
        try {
            return await this.cadastrarPerfilService.create(perfil)
          } catch (error: any) {
            throw error;
        }
    }
 
}
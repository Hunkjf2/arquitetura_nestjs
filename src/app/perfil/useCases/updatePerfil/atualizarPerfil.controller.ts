import { Controller, Body, Put, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PerfilDTO } from '../../../../dto/perfil/perfil.dto';
import { AtualizarPerfilService } from './atualizarPerfil.service';
import { JwtAuthGuard } from 'src/middlewares/jwt-auth.guard';
import { RolesGuard } from 'src/middlewares/roles.guard';
import { Roles } from 'src/middlewares/decoretor.guard';

@ApiTags('Perfil')
@Controller('perfil')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class AtualizarPerfilController {

    constructor(
        private readonly atualizarPerfilService: AtualizarPerfilService){
    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar Perfil' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_ATUALIZAR_PERFIL'])
    async create(@Param('id', ParseIntPipe) id: number,@Body() perfil: PerfilDTO): Promise<PerfilDTO> {
        try {
            perfil.id = id;
            return await this.atualizarPerfilService.update(perfil)
          } catch (error: any) {
            throw error;
        }
    }

}
import { Controller, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeletarPerfilService } from './deletarPerfil.service';
import { JwtAuthGuard } from 'src/middlewares/jwt-auth.guard';
import { RolesGuard } from 'src/middlewares/roles.guard';
import { Roles } from 'src/middlewares/decoretor.guard';

@ApiTags('Perfil')
@Controller('perfil')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class DeletarPerfilController {

    constructor(
        private readonly deletarPerfilService: DeletarPerfilService,
        ){
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar Perfil' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_DELETAR_PERFIL']) 
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        try {
            await this.deletarPerfilService.delete(id);
          } catch (error: any) {
            throw error;
        }
    }

}
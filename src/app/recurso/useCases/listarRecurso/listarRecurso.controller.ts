import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListarRecursoService } from './listarRecurso.service';
import { RecursoDTO } from '../../../../dto/recursos/recurso.dto';
import { JwtAuthGuard } from 'src/middlewares/jwt-auth.guard';
import { RolesGuard } from 'src/middlewares/roles.guard';
import { Roles } from 'src/middlewares/decoretor.guard';

@ApiTags('Recurso')
@Controller('recurso')
@ApiBearerAuth('JWT-auth')
@UseGuards(RolesGuard)
export class ListarRecursoController {

    constructor(
        private readonly listarRecursoService: ListarRecursoService){
    }

    @Get()
    @ApiOperation({ summary: 'Listar Todos Recursos' })
    @UseGuards(JwtAuthGuard)
    @Roles(['ROLE_LISTAR_RECURSO']) 
    async listAllRecurso(): Promise<RecursoDTO[]> {
        try {
            return await this.listarRecursoService.findAllRecurso();
          } catch (error: any) {
            throw error;
        }
    }

}
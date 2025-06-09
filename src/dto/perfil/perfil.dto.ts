import { IsNotEmpty, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { RecursoDTO } from "src/dto/recursos/recurso.dto";
import { Type } from "class-transformer";

export class PerfilDTO {

    @ApiProperty({
        description: 'Id do perfil',
        example: '99',
    })
    id?: number;

    @IsNotEmpty({
        message: 'Favor informe a descrição!',
    })
    @ApiProperty({
        description: 'Descrição do perfil',
        example: 'Administrador',
    })
    descricao: string;

    @IsNotEmpty({
        message: 'Favor informe os recursos!',
    })
    @ValidateNested({ each: true })
    @Type(() => RecursoDTO)
    @ApiProperty({
        type: [RecursoDTO],
        description: 'Lista de recursos associados ao perfil',
        example: [
            { id: 1 },
            { id: 2 },
        ],
    })
    recursos?: RecursoDTO[];
} 
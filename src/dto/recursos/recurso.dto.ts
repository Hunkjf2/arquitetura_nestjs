import { ApiProperty } from "@nestjs/swagger";

export class RecursoDTO {
    @ApiProperty({ required: false })
    id?: number;

    @ApiProperty({ required: false })
    recursos?: any[]
}
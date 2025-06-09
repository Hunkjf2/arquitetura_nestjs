import { ApiProperty } from "@nestjs/swagger";

export class PaginacaoDTO {
      
    @ApiProperty()
    page: string;

    @ApiProperty()
    pageSize: string;

    @ApiProperty({ required: false })
    search?: string;
}

export class PaginacaoResponseDTO {
    data: any[];
    total: number;
}
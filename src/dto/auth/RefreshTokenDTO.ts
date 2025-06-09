import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class RefreshTokenDTO {
    @IsNotEmpty({
        message: 'Favor informe o token!'
    })
    @ApiProperty({
        description: 'Refresh Token',
        example: 'ashkjash22837387hashajsh',
    })
    refresh_token: string;
}
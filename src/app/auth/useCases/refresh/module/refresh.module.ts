import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "src/middlewares/JWTStrategy";
import { PassportModule } from "@nestjs/passport";
import { RefreshController } from "../refresh.controller";
import { RefreshService } from "../refresh.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: process.env.TEMPO_TOKEN },
        })
    ],
    controllers: [RefreshController],
    providers: [
        RefreshService,
        JwtStrategy
    ]
})

export class RefreshModule {}
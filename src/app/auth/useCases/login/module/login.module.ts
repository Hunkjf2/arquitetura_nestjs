import { Module } from "@nestjs/common";
import { PrismaModule } from "src/app/prisma/module/prisma.module";
import { LoginController } from "../login.controller";
import { LoginService } from "../login.service";
import { ListarUsuarioModule } from "src/app/usuario/useCases/listarUsuario/module/listarUsuario.module";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "src/middlewares/JWTStrategy";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports: [
        PrismaModule,
        ListarUsuarioModule,
        PassportModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: process.env.TEMPO_TOKEN },
        })
    ],
    controllers: [LoginController],
    providers: [
        LoginService,
        JwtStrategy
    ]
})

export class LoginModule {}
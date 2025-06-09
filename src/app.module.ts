import { Module } from '@nestjs/common';
import { CadastrarPerfilModule } from './app/perfil/useCases/cadastrarPerfil/module/cadastrarPerfil.module';
import { DeletarPerfilModule } from './app/perfil/useCases/deletarPerfil/module/deletarPerfil.module';
import { ListarPerfilModule } from './app/perfil/useCases/listarPerfil/module/listarPerfil.module';
import { ListarRecursoModule } from './app/recurso/useCases/listarRecurso/module/listarRercurso.module';
import { PrismaModule } from './app/prisma/module/prisma.module';
import { DeletarUsuarioModule } from './app/usuario/useCases/deletarUsuario/module/deletarUsuario.module';
import { ListarUsuarioModule } from './app/usuario/useCases/listarUsuario/module/listarUsuario.module';
import { MinioClientModule } from './app/minio/module/minio.module';
import { LoginModule } from './app/auth/useCases/login/module/login.module';
import { RefreshModule } from './app/auth/useCases/refresh/module/refresh.module';
import { AtualizarUsuarioModule } from './app/usuario/useCases/atualizarUsuario/module/atualizarUsuario.module';
import { CadastrarUsuarioModule } from './app/usuario/useCases/cadastrarUsuario/module/cadastrarUsuario.module';
import { AtualizarPerfilModule } from './app/perfil/useCases/updatePerfil/module/atualizarPerfil.module';
import { DeletarRecursoModule } from './app/recurso/useCases/deletarRecurso/module/deletarRecurso.module';
import { CadastrarRecursoModule } from './app/recurso/useCases/cadastrarRecurso/module/cadastrarRecurso.module';

@Module({
  imports: [
    PrismaModule,
    LoginModule,
    RefreshModule,
    CadastrarPerfilModule,
    DeletarPerfilModule,
    ListarPerfilModule,
    ListarRecursoModule,
    AtualizarPerfilModule,
    CadastrarUsuarioModule,
    DeletarUsuarioModule,
    ListarUsuarioModule,
    AtualizarUsuarioModule,
    MinioClientModule,
    DeletarRecursoModule,
    CadastrarRecursoModule
  ]
})
export class AppModule {}

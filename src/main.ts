import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LogInterceptor } from './middlewares/log.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { ErrorInterceptor } from './exception/error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix(process.env.PATH_BACK + '/api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());
  app.useGlobalInterceptors(new ErrorInterceptor())
  app.enableCors({
    origin: '*',
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization, X-Auth-Token, Origin',
    exposedHeaders: ['Authorization', 'refresh_auth_token'],
    methods: 'GET,PUT,PATCH,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Documentação de Rotas')
    .setDescription('Sumário')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.PATH_BACK + '/api/v1/swagger', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();

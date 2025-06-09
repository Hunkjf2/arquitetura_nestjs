import { Module } from '@nestjs/common';
import { minioService } from '../minio.service';
@Module({
  providers: [
    {
      provide: 'MinioClientService',
      useValue: minioService,
    },
  ],
  exports: ['MinioClientService'],
})
export class MinioClientModule {}
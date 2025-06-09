import * as Minio from 'minio';

const MinioClientConfig: Minio.ClientOptions = {
  endPoint: process.env.endPoint || 'localhost',
  port: 80,
  useSSL: false,
  accessKey: process.env.accessKey || 'minioadmin',
  secretKey: process.env.secretKey || 'minioadmin',
};

export const minioService = new Minio.Client(MinioClientConfig);
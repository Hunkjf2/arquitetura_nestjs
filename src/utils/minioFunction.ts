import { minioService } from "src/app/minio/minio.service";

export default new class MinioFunction {

  async putfileObject(nome: string, file: any): Promise<void>{

    const fileSize = file.size;
    await minioService.putObject(process.env.BUCKET_TCE, nome, file, fileSize, function(err: any, etag: any) {
      if(err){
        return console.log(err, etag)
      } else {
        console.log('Arquivo carregado com sucesso!')
      }
    })

  }

  async getFileStream(caminho: string): Promise<string> {
    const dataStream = await minioService.getObject(process.env.BUCKET_TCE, caminho);
    
    return new Promise((resolve, reject) => {
      let chunks: Buffer[] = [];
      dataStream.on('data', function (chunk) {
        chunks.push(chunk);
      });
      dataStream.on('end', function () {
        const fileBuffer = Buffer.concat(chunks);
        console.log('End. Total size = ' + fileBuffer.length);
        const base64String = fileBuffer.toString('base64');
        resolve(base64String);
      });
      dataStream.on('error', function (err) {
        console.log(err);
        reject(err);
      });
    });
  }

}


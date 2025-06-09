import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { catchError, Observable } from 'rxjs';
import { MenssageDefault } from 'src/enum/MenssageDefault';
  
  @Injectable()
  export class ErrorInterceptor implements NestInterceptor {
    intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
      return next.handle().pipe(
        catchError((error) => {
          if (error instanceof HttpException) {
            throw error;
          } else {
            throw new HttpException(
              {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: MenssageDefault.ERRO_EXCEPTION,
              },
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
        }),
      );
    }
}
  
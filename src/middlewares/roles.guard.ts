import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenExpiredError } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { MenssageDefault } from 'src/enum/MenssageDefault';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new HttpException(
        { statusCode: HttpStatus.FORBIDDEN, message: MenssageDefault.TOKEN_EXPIRADO },
        HttpStatus.FORBIDDEN,
      );
    }

    const token = authHeader.split(' ')[1];

    try {
      const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET);
      const userRoles = decodedToken.perfils?.perfilRecurso?.map((pr: any) => pr.recurso.role) || [];
      const hasRole = requiredRoles.some((role) => userRoles.includes(role));

      if (!hasRole) {
        throw new HttpException(
          { statusCode: HttpStatus.UNAUTHORIZED, message: MenssageDefault.SEM_ACESSO_RECURSO },
          HttpStatus.UNAUTHORIZED,
        );
      }

      request.user = decodedToken;
      return true;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new HttpException(
          { statusCode: HttpStatus.FORBIDDEN, message: MenssageDefault.TOKEN_EXPIRADO },
          HttpStatus.FORBIDDEN,
        );
      } else {
        throw new HttpException(
          { statusCode: HttpStatus.UNAUTHORIZED, message: MenssageDefault.SEM_ACESSO_RECURSO },
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
  }
}

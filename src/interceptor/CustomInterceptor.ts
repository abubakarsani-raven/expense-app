import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log(context);
    console.log('Intercepting request ');
    return next.handle().pipe(
      map((data) => {
        console.log('Intercepting response ');
        return data;
      }),
    );
  }
}

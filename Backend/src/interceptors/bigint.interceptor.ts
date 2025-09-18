// bigint.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(data => this.convertBigIntToString(data))
        );
    }

    private convertBigIntToString(data: any): any {
        if (typeof data === 'bigint') {
            return data.toString();
        }
        if (Array.isArray(data)) {
            return data.map(item => this.convertBigIntToString(item));
        }
        if (typeof data === 'object' && data !== null) {
            const result: any = {};
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    result[key] = this.convertBigIntToString(data[key]);
                }
            }
            return result;
        }
        return data;
    }
}
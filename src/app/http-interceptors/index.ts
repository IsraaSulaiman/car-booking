import { AuthInterceptor } from './http-interceptors.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const HttpInteceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];

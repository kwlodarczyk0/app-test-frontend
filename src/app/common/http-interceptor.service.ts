import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../api/localStorage/local-storage.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private storage: LocalStorageService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storage.getAccesToken();

    const Authorization = `Bearer ${token}`;
    return next.handle(httpRequest.clone({ setHeaders: { Authorization } }));
  }
}

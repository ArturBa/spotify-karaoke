import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {
  readonly proxies = ['minilyrics', 'minilyrics-proxy'];
  readonly proxiesRegex = this.proxies.map((proxy) => new RegExp('^' + proxy));

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.proxiesRegex.some((proxyRegex) => proxyRegex.test(request.url))) {
      const dupReq = request.clone({
        url: window.location.origin + '/' + request.url,
      });
      return next.handle(dupReq);
    }
    return next.handle(request);
  }
}

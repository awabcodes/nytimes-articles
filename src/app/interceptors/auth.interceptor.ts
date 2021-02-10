import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state';
import * as AuthSelector from '../auth/state/auth.selectors'
import { first, mergeMap } from 'rxjs/operators';


/**
 * Responsible for adding token to request's header
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * @param store the app state
   * @constructor
   */
  constructor(private store: Store<AppState>) { }

  /**
   * Intercepts all HTTP requests and adds the JWT token to the request's header if the URL
   * is a REST endpoint and not login or logout.
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(AuthSelector.selectAccessToken),
      first(),
      mergeMap((token: string) => {
        if (!!token) {
          request = request.clone({
            setHeaders: {
              Authorization: 'Bearer ' + token
            }
          });
        }
        return next.handle(request);
      })
    );
  }
}
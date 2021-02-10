import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../auth/state/auth.actions';
import { AppState } from '../state';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) { }

  /**
   * Intercepts all HTTP requests and checks if the response status is 401 
   * then logs the user out if so
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.store.dispatch(AuthActions.logout());
            }
          }
        }
      )
    );
  }
}

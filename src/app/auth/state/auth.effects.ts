import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


/**
 * Auth module effects
 */
@Injectable()
export class AuthEffects {

  /** side effect for logging in */
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>
        this.authService.login(action.credentials).pipe(
          map(token => AuthActions.loginSuccess({ token })),
          tap(() => this.router.navigate(['/'])),
          catchError(error =>
            of(AuthActions.loginFailure({ error }))
          )
        )
      )
    )
  );

  /** side effect for registration */
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      mergeMap((action) =>
        this.authService.register(action.credentials).pipe(
          map(token => AuthActions.registerSuccess({ token })),
          tap(() => this.router.navigate(['/'])),
          catchError(error =>
            of(AuthActions.registerFailure({ error }))
          )
        )
      )
    )
  );

  /**
   * @param actions$ the auth actions
   * @param authService responsible for authentication with the backend
   * @param router angular router
   */
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../../auth/state/auth.actions';
import * as ArticleActions from '../../articles/state/article.actions';

/**
 * Effect for loading
 */
@Injectable()
export class SpinnerEffects {

  /** side effect for showing the spinner*/
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.login,
          AuthActions.register,
          ArticleActions.loadArticles,
          ArticleActions.loadArticleComments,
          ArticleActions.searchArticle
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  /** side effect for hiding the spinner*/
  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.loginSuccess,
          AuthActions.loginFailure,
          ArticleActions.loadArticlesSuccess,
          ArticleActions.loadArticlesFailure,
          ArticleActions.loadArticleCommentsSuccess,
          ArticleActions.loadArticleCommentsFailure,
          ArticleActions.searchArticlesSuccess,
          ArticleActions.searchArticlesFailure,
        ),
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
        })
      ),
    { dispatch: false }
  );

  /**
   * @param actions$ the app actions
   * @param spinner the spinner service
   */
  constructor(private actions$: Actions, private spinner: NgxSpinnerService) { }
}

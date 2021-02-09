import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ArticleActions from './article.actions';
import { of } from 'rxjs';
import { ArticleService } from '../services/article.service';

@Injectable()
export class ArticleEffects {
  loadWorldArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.loadArticles),
      mergeMap((action) =>
        this.articleService.getArticlesBySection(action.section).pipe(
          map(articles => ArticleActions.loadArticlesSuccess({ articles })),
          catchError(error =>
            of(ArticleActions.loadArticlesFailure({ error }))
          )
        )
      )
    )
  );

  loadArticleComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.loadArticleComments),
      mergeMap((action) =>
        this.articleService.getArticleComments(action.articleUrl).pipe(
          map(comments => ArticleActions.loadArticleCommentsSuccess({ comments })),
          catchError(error =>
            of(ArticleActions.loadArticleCommentsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) { }
}

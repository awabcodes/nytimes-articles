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
      ofType(ArticleActions.loadWorldArticles),
      mergeMap(() =>
        this.articleService.getArticlesBySection('world').pipe(
          map(articles => ArticleActions.loadArticlesSuccess({ articles })),
          catchError(error =>
            of(ArticleActions.loadArticlesFailure({ error }))
          )
        )
      )
    )
  );

  loadScienceArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.loadScienceArticles),
      mergeMap(() =>
        this.articleService.getArticlesBySection('science').pipe(
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

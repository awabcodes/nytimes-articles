import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ArticleActions from './article.actions';
import { of } from 'rxjs';
import { ArticleService } from '../services/article.service';


/**
 * Articles module effects
 */
@Injectable()
export class ArticleEffects {

  /** side effect for loading articles */
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

  /** side effect for loading article comments */
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

  /** side effect for searching articles */
  searchArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.searchArticle),
      mergeMap((action) =>
        this.articleService.searchArticles(action.query, action.page).pipe(
          map(articleSearch => ArticleActions.searchArticlesSuccess({ articleSearch })),
          catchError(error =>
            of(ArticleActions.searchArticlesFailure({ error }))
          )
        )
      )
    )
  );

  /**
   * @param actions$ the articles actions
   * @param articleService responsible for getting resources from the backend
   */
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) { }
}

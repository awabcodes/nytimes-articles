import { createAction, props } from '@ngrx/store';
import { ArticleSearchResponse } from '../models/article-search.model';
import { Article } from '../models/article.model';

export const loadArticles = createAction(
  '[Article List Component] Load Articles',
  props<{ section: string }>()
);

export const loadArticlesSuccess = createAction(
  '[Article Effect] Load Articles Success',
  props<{ articles: Article[] }>()
);

export const loadArticlesFailure = createAction(
  '[Article Effect] Load Articles Failure',
  props<{ error: any }>()
);

export const loadArticle = createAction(
  '[Article Detail Component] Load Article',
  props<{ article: Article }>()
);

export const loadArticleComments = createAction(
  '[Article Detail Component] Load Article Comments',
  props<{ articleUrl: string }>()
);

export const loadArticleCommentsSuccess = createAction(
  '[Article Effect] Load Article Comments Success',
  props<{ comments: Comment[] }>()
);

export const loadArticleCommentsFailure = createAction(
  '[Article Effect] Load Article Comments Failure',
  props<{ error: any }>()
);

export const searchArticle = createAction(
  '[Article Search Component] Search Articles',
  props<{ query: string, page: number }>()
);

export const searchArticlesSuccess = createAction(
  '[Article Effect] Search Articles Success',
  props<{ articleSearch: ArticleSearchResponse }>()
);

export const searchArticlesFailure = createAction(
  '[Article Effect] Search Articles Failure',
  props<{ error: any }>()
);
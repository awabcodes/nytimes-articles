import { createAction, props } from '@ngrx/store';
import { Article } from '../models/article.model';

export const loadWorldArticles = createAction(
  '[Article List Component] Load World Articles'
);

export const loadScienceArticles = createAction(
  '[Article List Component] Load Science Articles'
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
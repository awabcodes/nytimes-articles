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

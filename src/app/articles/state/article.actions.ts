import { createAction, props } from '@ngrx/store';
import { ArticleSearchResponse } from '../models/article-search.model';
import { Article } from '../models/article.model';

/** Action fired to load articles */
export const loadArticles = createAction(
  '[Article List Component] Load Articles',
  props<{ section: string }>()
);

/** Action fired on load articles success */
export const loadArticlesSuccess = createAction(
  '[Article Effect] Load Articles Success',
  props<{ articles: Article[] }>()
);

/** Action fired on load articles failure */
export const loadArticlesFailure = createAction(
  '[Article Effect] Load Articles Failure',
  props<{ error: any }>()
);

/** Action fired to load article */
export const loadArticle = createAction(
  '[Article Detail Component] Load Article',
  props<{ article: Article }>()
);

/** Action fired to load article comments */
export const loadArticleComments = createAction(
  '[Article Detail Component] Load Article Comments',
  props<{ articleUrl: string }>()
);

/** Action fired on load article comments success */
export const loadArticleCommentsSuccess = createAction(
  '[Article Effect] Load Article Comments Success',
  props<{ comments: Comment[] }>()
);

/** Action fired on load article comments failure */
export const loadArticleCommentsFailure = createAction(
  '[Article Effect] Load Article Comments Failure',
  props<{ error: any }>()
);

/** Action fired to search for articles */
export const searchArticle = createAction(
  '[Article Search Component] Search Articles',
  props<{ query: string, page: number }>()
);

/** Action fired on search articles success */
export const searchArticlesSuccess = createAction(
  '[Article Effect] Search Articles Success',
  props<{ articleSearch: ArticleSearchResponse }>()
);

/** Action fired on search articles failure */
export const searchArticlesFailure = createAction(
  '[Article Effect] Search Articles Failure',
  props<{ error: any }>()
);
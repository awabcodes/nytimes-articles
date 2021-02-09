import {
  createReducer,
  on
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from '../models/article.model';
import * as ArticleActions from './article.actions';

export const articleFeatureKey = 'articles';

export interface State extends EntityState<Article> {
  articleComments: Comment;
  error: any;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  selectId: (article: Article) => article.url,
});

export const initialState = adapter.getInitialState({
  articleComments: null,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(ArticleActions.loadArticlesSuccess, (state, action) => adapter.setAll(action.articles, state)),
  on(ArticleActions.loadArticlesFailure, (state, action) => ({ ...state, error: action.error })),
  on(ArticleActions.loadArticleCommentsSuccess, (state, action) => ({ ...state, articleComments: action.comments })),
  on(ArticleActions.loadArticleCommentsFailure, (state, action) => ({ ...state, error: action.error })),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

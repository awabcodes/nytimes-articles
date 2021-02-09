import {
  createReducer,
  on
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from '../models/article.model';
import * as ArticleActions from './article.actions';

export const articleFeatureKey = 'articles';

export interface State extends EntityState<Article> {
  error: any;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  selectId: (article: Article) => article.uri,
});

export const initialState = adapter.getInitialState({
  error: null
});

export const reducer = createReducer(
  initialState,
  on(ArticleActions.loadArticlesSuccess, (state, action) => adapter.setAll(action.articles, state)),
  on(ArticleActions.loadArticlesFailure, (state, action) => ({ ...state, error: action.error })),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

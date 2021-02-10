import {
  createReducer,
  on
} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from '../models/article.model';
import * as ArticleActions from './article.actions';
import { ArticleSearch, ArticleSearchMeta } from '../models/article-search.model';

/** articles module state key */
export const articleFeatureKey = 'articles';

/** articles module state interface */
export interface State extends EntityState<Article> {
  /** article comments */
  articleComments: Comment;

  /** last 5 search terms */
  searchHistory: string[];

  /** articles search result */
  searchResult: ArticleSearch[];

  /** articles search result meta info */
  searchResultMeta: ArticleSearchMeta;

  /** articles state error */
  error: any;
}

/** articles module entity adapter */
export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  selectId: (article: Article) => article.url,
});

/** articles module initial state */
export const initialState = adapter.getInitialState({
  articleComments: null,
  searchHistory: [],
  searchResult: null,
  searchResultMeta: null,
  error: null
});

/** articles module reducers responsible for state manipulation */
export const reducer = createReducer(
  initialState,
  on(ArticleActions.loadArticlesSuccess, (state, action) => adapter.setAll(action.articles, state)),
  on(ArticleActions.loadArticlesFailure, (state, action) => ({ ...state, error: action.error })),
  on(ArticleActions.loadArticleCommentsSuccess, (state, action) => ({ ...state, articleComments: action.comments })),
  on(ArticleActions.loadArticleCommentsFailure, (state, action) => ({ ...state, error: action.error })),
  on(ArticleActions.searchArticle, (state, action) => ({
    ...state,
    searchHistory: state.searchHistory.length < 5 && !state.searchHistory.includes(action.query)
      ? [...state.searchHistory, action.query]
      : [...state.searchHistory]
  })),
  on(ArticleActions.searchArticlesSuccess, (state, action) => ({
    ...state, searchResult: action.articleSearch.docs, searchResultMeta: action.articleSearch.meta
  })),
  on(ArticleActions.searchArticlesFailure, (state, action) => ({ ...state, error: action.error })),
);

/** entity adapter selectors */
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as ArticleReducer from './article.reducer';

export const selectArticlesState = createFeatureSelector<ArticleReducer.State>(
    ArticleReducer.articleFeatureKey
);

export const selectAllArticles = createSelector(
    selectArticlesState,
    ArticleReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectArticlesState,
    ArticleReducer.selectEntities
);

export const selectError = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.error
);

export const selectEntityById = createSelector(
    selectAllEntities,
    (entities, props) => entities[props.id]
);

export const selectArticleComments = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.articleComments
);

export const selectSearchHistory = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.searchHistory
);

export const selectSearchResult = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.searchResult
);

export const selectSearchResultMeta = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.searchResultMeta
);
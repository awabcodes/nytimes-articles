import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as ArticleReducer from './article.reducer';


/** articles module state selector */
export const selectArticlesState = createFeatureSelector<ArticleReducer.State>(
    ArticleReducer.articleFeatureKey
);

/** articles module all articles selector */
export const selectAllArticles = createSelector(
    selectArticlesState,
    ArticleReducer.selectAll
);

/** articles module all entities selector */
export const selectAllEntities = createSelector(
    selectArticlesState,
    ArticleReducer.selectEntities
);

/** articles module error selector */
export const selectError = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.error
);

/** articles module select entity by id selector */
export const selectEntityById = createSelector(
    selectAllEntities,
    (entities, props) => entities[props.id]
);

/** articles module article comments selector */
export const selectArticleComments = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.articleComments
);

/** articles module search history selector */
export const selectSearchHistory = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.searchHistory
);

/** articles module search result selector */
export const selectSearchResult = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.searchResult
);

/** articles module search meta selector */
export const selectSearchResultMeta = createSelector(
    selectArticlesState,
    (state: ArticleReducer.State) => state.searchResultMeta
);
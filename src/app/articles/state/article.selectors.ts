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
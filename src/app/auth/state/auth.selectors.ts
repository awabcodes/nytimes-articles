import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as AuthReducer from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthReducer.State>(
    AuthReducer.authFeatureKey
);

export const selectAccessToken = createSelector(
    selectAuthState,
    (state: AuthReducer.State) => state.accessToken
);

export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state: AuthReducer.State): boolean => state.accessToken != null
);

export const selectError = createSelector(
    selectAuthState,
    (state: AuthReducer.State) => state.error
);

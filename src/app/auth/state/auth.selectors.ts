import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as AuthReducer from './auth.reducer';


/** auth module state selector */
export const selectAuthState = createFeatureSelector<AuthReducer.State>(
    AuthReducer.authFeatureKey
);

/** auth module access token selector */
export const selectAccessToken = createSelector(
    selectAuthState,
    (state: AuthReducer.State) => state.accessToken
);

/** auth module is logged in state selector */
export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state: AuthReducer.State): boolean => state.accessToken != null
);

/** auth module error state selector */
export const selectError = createSelector(
    selectAuthState,
    (state: AuthReducer.State) => state.error
);

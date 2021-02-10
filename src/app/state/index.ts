import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromArticle from '../articles/state/article.reducer';
import * as fromAuth from '../auth/state/auth.reducer';

/** Root app state */
export interface AppState {
  /** Articles module state */
  [fromArticle.articleFeatureKey]: fromArticle.State;

  /** Auth module state */
  [fromAuth.authFeatureKey]: fromAuth.State;
}

/** Root app reducers */
export const reducers: ActionReducerMap<AppState> = {
  [fromArticle.articleFeatureKey]: fromArticle.reducer,

  [fromAuth.authFeatureKey]: fromAuth.reducer,
};

/** pre-process actions before normal reducers are invoked */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

/** Log the state and event when running as debug */
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromArticle from '../articles/state/article.reducer';

export interface AppState {
  [fromArticle.articleFeatureKey]: fromArticle.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromArticle.articleFeatureKey]: fromArticle.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
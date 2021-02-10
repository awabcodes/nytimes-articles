import {
  createReducer,
  on
} from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  email: string;
  accessToken: string;
  error: any;
}

export const initialState: State = {
  email: null,
  accessToken: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({ ...state, accessToken: action.token.access_token })),
  on(AuthActions.loginFailure, (state, action) => ({ ...state, error: action.error })),
  on(AuthActions.registerSuccess, (state, action) => ({ ...state, accessToken: action.token.access_token })),
  on(AuthActions.registerFailure, (state, action) => ({ ...state, error: action.error })),
  on(AuthActions.logout, (state, action) => ({ ...state, accessToken: null }))
);
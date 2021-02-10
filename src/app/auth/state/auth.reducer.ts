import {
  createReducer,
  on
} from '@ngrx/store';
import * as AuthActions from './auth.actions';

/** auth module state key */
export const authFeatureKey = 'auth';

/** auth module state interface */
export interface State {
  /** auth state user's email */
  email: string;

  /** auth state user's access token */
  accessToken: string;

  /** auth state error */
  error: any;
}

/** auth module initial state */
export const initialState: State = {
  email: null,
  accessToken: null,
  error: null,
};

/** auth module reducers responsible for state manipulation*/
export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({ ...state, accessToken: action.token.access_token })),
  on(AuthActions.loginFailure, (state, action) => ({ ...state, error: action.error })),
  on(AuthActions.registerSuccess, (state, action) => ({ ...state, accessToken: action.token.access_token })),
  on(AuthActions.registerFailure, (state, action) => ({ ...state, error: action.error })),
  on(AuthActions.logout, (state, action) => ({ ...state, accessToken: null }))
);
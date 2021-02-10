import { createAction, props } from '@ngrx/store';
import { AuthToken } from '../models/auth-token';
import { Auth } from '../models/auth.model';

export const login = createAction(
  '[Login Component] Login',
  props<{ credentials: Auth }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login Success',
  props<{ token: AuthToken }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login Failure',
  props<{ error: any }>()
);

export const register = createAction(
  '[Register Component] Register',
  props<{ credentials: Auth }>()
);

export const registerSuccess = createAction(
  '[Auth Effect] Register Success',
  props<{ token: AuthToken }>()
);

export const registerFailure = createAction(
  '[Auth Effect] Register Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[Header Component] Logout'
);
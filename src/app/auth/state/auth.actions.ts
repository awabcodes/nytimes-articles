import { createAction, props } from '@ngrx/store';
import { AuthToken } from '../models/auth-token';
import { Auth } from '../models/auth.model';

/** Action fired on login */
export const login = createAction(
  '[Login Component] Login',
  props<{ credentials: Auth }>()
);

/** Action fired on login success*/
export const loginSuccess = createAction(
  '[Auth Effect] Login Success',
  props<{ token: AuthToken }>()
);

/** Action fired on login failure*/
export const loginFailure = createAction(
  '[Auth Effect] Login Failure',
  props<{ error: any }>()
);

/** Action fired on register*/
export const register = createAction(
  '[Register Component] Register',
  props<{ credentials: Auth }>()
);

/** Action fired on register success*/
export const registerSuccess = createAction(
  '[Auth Effect] Register Success',
  props<{ token: AuthToken }>()
);

/** Action fired on register failure*/
export const registerFailure = createAction(
  '[Auth Effect] Register Failure',
  props<{ error: any }>()
);

/** Action fired on logout*/
export const logout = createAction(
  '[Header Component] Logout'
);
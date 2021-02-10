import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

/**
 * Root app effects
 */
@Injectable()
export class AppEffects {
  /**
   * @param actions$ root app actions
   */
  constructor(private actions$: Actions) { }
}

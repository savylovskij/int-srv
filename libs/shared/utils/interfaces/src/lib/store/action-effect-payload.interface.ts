import { Action } from '@ngrx/store';

export interface IActionEffectPayload<T = any> extends Action {
  payload: T;
}

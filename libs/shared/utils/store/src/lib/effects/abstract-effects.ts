import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

/**
 * Abstract effect
 */
export abstract class AbstractEffects<T> {
  getState<S = T>(state: any, key?: string): S {
    return state[key || this.key];
  }

  errorHandler(
    action: Action,
    error: Record<string, unknown> = {},
    responseActions?: (payload?: any) => TypedAction<any>,
    debug = false
  ) {
    if (debug) console.error(error);

    if (responseActions()) {
      return responseActions({ payload: error });
    }
  }

  protected constructor(protected readonly key: string) {}
}

import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { md5 } from '../utils/md5.util';

/**
 * Abstract effect
 */
export abstract class AbstractEffects<T> {
  getState<S = T>(state: any, key?: string): S {
    return state[key || this.key];
  }

  getEffectIdFromPayload(payload: any): string {
    return md5(JSON.stringify(payload));
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

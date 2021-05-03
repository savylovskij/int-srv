import { RouterReducerState } from '@ngrx/router-store';
import { IRouterUrlState } from './router-url-state.interface';

/**
 * Root state for all application
 */
export interface IRootState {
  router: RouterReducerState<IRouterUrlState>;
}

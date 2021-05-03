import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from '../interfaces/root-state.interface';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<IRootState> = {
  router: routerReducer,
};

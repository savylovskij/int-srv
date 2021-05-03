import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IRootState } from '../interfaces/root-state.interface';

export const reducers: ActionReducerMap<IRootState> = {
  router: routerReducer,
};

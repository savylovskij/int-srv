import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { IRouterUrlState } from '../interfaces/router-url-state.interface';

/**
 * Custom RouterStateSerializer
 * See also https://ngrx.io/guide/router-store/configuration
 */
@Injectable()
export class StoreRouterStateSerializer
  implements RouterStateSerializer<IRouterUrlState> {
  serialize(routerState: RouterStateSnapshot): IRouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}

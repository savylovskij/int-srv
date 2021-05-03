import { Params } from '@angular/router';

/**
 * Router state URL
 */
export interface IRouterUrlState {
  url: string;
  params: Params;
  queryParams: Params;
}

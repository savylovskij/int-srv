import { Type } from '@angular/core';
import { IUserApollo } from './user-apollo.interface';
import { IUserFacade } from './user-facade.interface';

/**
 * User store options
 */
export interface IUserStoreOptions {
  apollo: Type<IUserApollo>;
  facade: Type<IUserFacade>;
}

import { Type } from '@angular/core';
import { IAuthStorage } from './auth-storage.interface';
import { IAuthApollo } from './auth-apollo.interface';
import { IAuthFacade } from './auth-facade.interface';

export interface IAuthStorageOptions {
  facade: Type<IAuthFacade>;
  storage: Type<IAuthStorage>;
  apollo: Type<IAuthApollo>;
}

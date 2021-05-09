import { Type } from '@angular/core';
import { IAuthStorage } from './auth-storage.interface';
import { IAuthApollo } from './auth-apollo.interface';

export interface IAuthStorageOptions {
  storage: Type<IAuthStorage>;
  apollo: Type<IAuthApollo>;
}

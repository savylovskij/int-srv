import { Type } from '@angular/core';
import { IAuthStorage } from './auth-storage.interface';

export interface IAuthStorageOptions {
  storage: Type<IAuthStorage>;
}

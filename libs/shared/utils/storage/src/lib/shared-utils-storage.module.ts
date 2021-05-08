import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  ICookieService,
  ICookieStorage,
  ILocalStorage,
  IMemoryStorage,
  ISessionStorage,
  IStorageOptions,
} from '@int-srv/shared/utils/interfaces';
import { BaseCookieService } from './services/base-cookie.service';
import { BaseSessionStorage } from './storage/base-session.storage';
import { BaseLocalStorage } from './storage/base-local.storage';
import { BaseMemoryStorage } from './storage/base-memory.storage';
import { BaseCookieStorage } from './storage/base-cookie.storage';

@NgModule()
export class StorageModule {
  static foRoot(
    options: Partial<IStorageOptions>
  ): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {
          provide: ICookieService,
          useClass: options.cookieService || BaseCookieService,
        },
        {
          provide: ICookieStorage,
          useClass: options.cookieStorage || BaseCookieStorage,
        },
        {
          provide: ISessionStorage,
          useClass: options.sessionStorage || BaseSessionStorage,
        },
        {
          provide: ILocalStorage,
          useClass: options.localStorage || BaseLocalStorage,
        },
        {
          provide: IMemoryStorage,
          useClass: options.memoryStorage || BaseMemoryStorage,
        },
      ],
    };
  }
}

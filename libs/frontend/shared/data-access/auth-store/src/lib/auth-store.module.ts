import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { IAuthStorageOptions } from './interfaces/auth-storage-options.interface';
import { IAuthStorage } from './interfaces/auth-storage.interface';
import { BaseAuthStorage } from './services/base-auth-storage.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthFacade],
})
export class AuthStoreModule {
  static forRoot(
    options: Partial<IAuthStorageOptions> = {}
  ): ModuleWithProviders<AuthStoreModule> {
    return {
      ngModule: AuthStoreModule,
      providers: [
        {
          provide: IAuthStorage,
          useClass: options.storage || BaseAuthStorage,
        },
      ],
    };
  }
}

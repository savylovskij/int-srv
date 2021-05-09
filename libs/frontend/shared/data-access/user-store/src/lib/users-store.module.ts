import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './+state/user.effects';
import * as fromUser from './+state/user.reducer';
import { IUserApollo } from './interfaces/user-apollo.interface';
import { BaseUserApollo } from './services/base-user-apollo.service';
import { IUserFacade } from './interfaces/user-facade.interface';
import { BaseUserFacade } from './services/base-user-facade.service';
import { IUserStoreOptions } from './interfaces/user-store-options.interface';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UsersStoreModule {
  static forRoot(
    options: Partial<IUserStoreOptions> = {}
  ): ModuleWithProviders<UsersStoreModule> {
    return {
      ngModule: UsersStoreModule,
      providers: [
        {
          provide: IUserApollo,
          useClass: options.apollo || BaseUserApollo,
        },
        {
          provide: IUserFacade,
          useClass: options.facade || BaseUserFacade,
        },
      ],
    };
  }
}

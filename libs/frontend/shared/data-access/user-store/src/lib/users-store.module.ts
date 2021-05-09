import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { IUserStoreOptions } from './interfaces/user-store-options.interface';
import { IUserApollo } from './interfaces/user-apollo.interface';
import { IUserFacade } from './interfaces/user-facade.interface';
import { BaseUsersFacade } from './services/base-user-facade.service';
import { BaseUsersApollo } from './services/base-user-apollo.service';

@NgModule({
  imports: [
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
          useClass: options.apollo || BaseUsersApollo,
        },
        {
          provide: IUserFacade,
          useClass: options.facade || BaseUsersFacade,
        },
      ],
    };
  }
}

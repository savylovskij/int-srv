import { NgModule } from '@angular/core';
import { userProfileContainers } from './user-profile.common';
import { UsersStoreModule } from '@int-srv/frontend/shared/data-access/user-store';

@NgModule({
  declarations: [...userProfileContainers],
  imports: [UsersStoreModule.forRoot()],
  exports: [...userProfileContainers],
})
export class UserProfileModule {}

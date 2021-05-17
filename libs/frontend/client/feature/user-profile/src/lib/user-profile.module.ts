import { NgModule } from '@angular/core';
import {
  userProfileContainers,
  userProfileRoutes,
} from './user-profile.common';
import { UsersStoreModule } from '@int-srv/frontend/shared/data-access/user-store';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...userProfileContainers],
  imports: [
    UsersStoreModule.forRoot(),
    RouterModule.forChild(userProfileRoutes),
  ],
  exports: [...userProfileContainers],
})
export class UserProfileModule {}

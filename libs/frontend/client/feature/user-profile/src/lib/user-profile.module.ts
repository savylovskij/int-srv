import { NgModule } from '@angular/core';
import {
  userProfileContainers,
  userProfileRoutes,
} from './user-profile.common';
import { UsersStoreModule } from '@int-srv/frontend/shared/data-access/user-store';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserProfileUiModule } from '@int-srv/frontend/client/ui/user-profile';

@NgModule({
  declarations: [...userProfileContainers],
  imports: [
    UserProfileUiModule,
    UsersStoreModule.forRoot(),
    RouterModule.forChild(userProfileRoutes),
    CommonModule,
  ],
  exports: [...userProfileContainers],
})
export class UserProfileModule {}

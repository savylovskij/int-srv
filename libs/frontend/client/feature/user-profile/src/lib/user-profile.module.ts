import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  userProfileContainers,
  userProfileRoutes,
} from './user-profile.common';
import { UsersStoreModule } from '@int-srv/frontend/shared/data-access/user-store';
import { RouterModule } from '@angular/router';
import { UserProfileUiModule } from '@int-srv/frontend/client/ui/user-profile';

@NgModule({
  declarations: [...userProfileContainers],
  imports: [
    CommonModule,
    UserProfileUiModule,
    UsersStoreModule.forRoot(),
    RouterModule.forChild(userProfileRoutes),
  ],
  exports: [...userProfileContainers],
})
export class UserProfileModule {}

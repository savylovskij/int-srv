import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileUiContainers } from './user-profile-ui.common';

@NgModule({
  declarations: [...userProfileUiContainers],
  imports: [CommonModule],
  exports: [...userProfileUiContainers],
})
export class UserProfileUiModule {}

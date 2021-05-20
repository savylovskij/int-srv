import { Routes } from '@angular/router';
import { UserProfileBlockComponent } from './user-profile-block/user-profile-block.component';

export const userProfileRoutes: Routes = [
  {
    path: '',
    component: UserProfileBlockComponent,
  },
];

export const userProfileContainers: any[] = [UserProfileBlockComponent];

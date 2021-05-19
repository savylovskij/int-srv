import { Routes } from '@angular/router';
import { AuthBlockComponent } from './auth-block/auth-block.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthBlockComponent,
  },
];

export const authContainers: any[] = [AuthBlockComponent];

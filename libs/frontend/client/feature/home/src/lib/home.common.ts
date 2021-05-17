import { Routes } from '@angular/router';
import { HomePageUiComponent } from './home-page-ui/home-page-ui.component';
import { BaseLayoutUiComponent } from '@int-srv/frontend/ui/components';

export const homeRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageUiComponent,
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@int-srv/frontend/client/feature/auth').then(
            (m) => m.AuthModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('@int-srv/frontend/client/feature/user-profile').then(
            (m) => m.UserProfileModule
          ),
      },
    ],
  },
];

export const homeContainers: any[] = [HomePageUiComponent];

import { Routes } from '@angular/router';
import { HomePageBlockComponent } from './home-page-block/home-page-block.component';
import { LayoutUiComponent } from '@int-srv/frontend/client/ui/layout';

export const homeRoutes: Routes = [
  {
    path: '',
    component: LayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageBlockComponent,
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

export const homeContainers: any[] = [HomePageBlockComponent];

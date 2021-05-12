import { AppComponent } from './components/app/app.component';
import { Routes } from '@angular/router';

export const coreRotes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@int-srv/frontend/client/feature/home').then((m) => m.HomeModule),
  },
];

export const coreContainers: any[] = [AppComponent];

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@int-srv/frontend/shared/data-access/root-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'intSrv-client' }),
    RootStoreModule,
    RouterModule.forRoot([], {
      initialNavigation: 'enabled',
    }),
  ],
})
export class AppModule {}

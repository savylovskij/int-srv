import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'intSrv-client' }),
    RouterModule.forRoot([], {
      initialNavigation: 'enabled',
    }),
  ],
})
export class AppModule {}

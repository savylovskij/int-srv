import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './core/components/app/app.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    BrowserAnimationsModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({ logOnly: environment.production })
      : [],
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}

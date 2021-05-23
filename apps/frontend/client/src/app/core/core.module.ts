import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createApollo } from './utils/create-apollo';
import { NxModule } from '@nrwl/angular';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@int-srv/frontend/shared/data-access/root-store';
import { EffectsModule } from '@ngrx/effects';

import { coreContainers, coreRotes } from './core.common';
import { AuthModule } from '@int-srv/frontend/client/feature/auth';
import { StorageModule } from '@int-srv/shared/utils/storage';

@NgModule({
  declarations: [...coreContainers],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
    StorageModule.foRoot(),
    AuthModule,
    EffectsModule.forRoot([]),
    RouterModule.forRoot(coreRotes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class CoreModule {}

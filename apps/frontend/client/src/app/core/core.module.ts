import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createApollo } from './utils/create-apollo';
import { NxModule } from '@nrwl/angular';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@int-srv/frontend/shared/data-access/root-store';

import { coreContainers, coreRotes } from './core.common';

@NgModule({
  declarations: [...coreContainers],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
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

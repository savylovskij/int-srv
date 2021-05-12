import { NgModule } from '@angular/core';
import { homeContainers, homeRoutes } from './home.common';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...homeContainers],
  imports: [EffectsModule.forRoot([]), RouterModule.forChild(homeRoutes)],
  exports: [...homeContainers],
})
export class HomeModule {}

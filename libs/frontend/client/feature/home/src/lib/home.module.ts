import { NgModule } from '@angular/core';
import { homeContainers, homeRoutes } from './home.common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...homeContainers],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [...homeContainers],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { navbarContainers } from './navbar.common';

@NgModule({
  declarations: [...navbarContainers],
  exports: [...navbarContainers],
})
export class NavbarModule {}

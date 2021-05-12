import { NgModule } from '@angular/core';
import { headerContainers } from './header.common';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [...headerContainers],
  imports: [NavbarModule],
  exports: [...headerContainers],
})
export class HeaderModule {}

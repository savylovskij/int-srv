import { NgModule } from '@angular/core';
import { authContainers } from './auth.common';
import { AuthStoreModule } from '@int-srv/frontend/shared/data-access/auth-store';

@NgModule({
  declarations: [...authContainers],
  imports: [AuthStoreModule.forRoot()],
  exports: [...authContainers],
})
export class AuthModule {}

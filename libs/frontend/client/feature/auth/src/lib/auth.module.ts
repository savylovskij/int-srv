import { NgModule } from '@angular/core';
import { authContainers } from './auth.common';
import { AuthStoreModule } from '@int-srv/frontend/shared/data-access/auth-store';
import { LoginFormModule } from '@int-srv/frontend/client/ui/login-form';

@NgModule({
  declarations: [...authContainers],
  imports: [AuthStoreModule.forRoot(), LoginFormModule],
  exports: [...authContainers],
})
export class AuthModule {}

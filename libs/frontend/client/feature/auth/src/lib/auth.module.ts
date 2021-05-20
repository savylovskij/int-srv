import { NgModule } from '@angular/core';
import { authContainers, authRoutes } from './auth.common';
import { AuthStoreModule } from '@int-srv/frontend/shared/data-access/auth-store';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...authContainers],
  imports: [AuthStoreModule.forRoot(), RouterModule.forChild(authRoutes)],
  exports: [...authContainers],
})
export class AuthModule {}

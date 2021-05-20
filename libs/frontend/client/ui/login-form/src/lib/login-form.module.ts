import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginFormContainers } from './login-form.-common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [...loginFormContainers],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  exports: [...loginFormContainers],
})
export class LoginFormModule {}

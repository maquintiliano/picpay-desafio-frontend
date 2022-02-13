import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './page/login/login.component';
import { AUTH_ROUTES } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }

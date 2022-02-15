import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageModule } from 'src/domains/login/pages/login-page/login-page.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TasksPageModule } from 'src/domains/payment/pages/tasks-page/tasks-page.module';
import { NavbarModule } from 'src/domains/shared/components/navbar/navbar.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginPageModule,
    NoopAnimationsModule,
    TasksPageModule,
    NavbarModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

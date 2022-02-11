import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageModule } from 'src/pages/login-page/login-page.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService } from 'src/services/LocalStorageService';
import { TasksPageModule } from 'src/pages/tasks-page/tasks-page.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginPageModule,
    NoopAnimationsModule,
    TasksPageModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

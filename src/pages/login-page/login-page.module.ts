import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./login-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [ReactiveFormsModule, BrowserModule]
})
export class LoginPageModule { }

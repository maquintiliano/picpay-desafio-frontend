import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./login-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AccountService } from "src/services/AccountService";
import { LocalStorageService } from "src/services/LocalStorageService";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [ReactiveFormsModule],
  providers: [AccountService, LocalStorageService]
})
export class LoginPageModule { }

import { NgModule } from '@angular/core';
import { AccountService } from 'src/domains/login/services/AccountService';
import { NavbarComponent } from './navbar.component';
@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [AccountService]
})
export class NavbarModule { }

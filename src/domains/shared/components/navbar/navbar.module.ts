import { NgModule } from '@angular/core';
import { AccountService } from 'src/domains/login/services/AccountService';
import { LocalStorageService } from 'src/domains/shared/services/LocalStorageService';
import { NavbarComponent } from './navbar.component';
@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [AccountService, LocalStorageService]
})
export class NavbarModule { }

import { NgModule } from '@angular/core';
import { AccountService } from 'src/services/AccountService';
import { LocalStorageService } from 'src/services/LocalStorageService';
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

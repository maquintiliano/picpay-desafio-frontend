import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout-auth/components/header/header.component';
import { LayoutAuthComponent } from './components/layout-auth/page/layout-auth.component';
import { RouterModule } from '@angular/router';
import { LayoutNoAuthComponent } from './components/layout-no-auth/layout-no-auth.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutAuthComponent,
    LayoutNoAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    LayoutAuthComponent]
})
export class CoreModule { }

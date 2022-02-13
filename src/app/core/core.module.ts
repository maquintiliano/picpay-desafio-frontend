import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout-auth/components/header/header.component';
import { LayoutAuthComponent } from './components/layout-auth/page/layout-auth.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutAuthComponent
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

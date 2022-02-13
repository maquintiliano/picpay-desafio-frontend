import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app-routing.module';


import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    CoreModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

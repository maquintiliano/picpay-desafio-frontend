import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './shared/components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppTableBodyDirective } from './shared/components/table/configs/app-table-body.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    AppTableBodyDirective
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgxPaginationModule, TableComponent, AppTableBodyDirective]
})
export class SharedModule { }

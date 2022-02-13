import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './shared/components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppTableBodyDirective } from './shared/components/table/configs/app-table-body.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateModalComponent } from './shared/components/template-modal/template-modal.component';



@NgModule({
  declarations: [
    TableComponent,
    AppTableBodyDirective,
    TemplateModalComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxPaginationModule, 
    TableComponent, 
    AppTableBodyDirective,
    TemplateModalComponent
  ]
})
export class SharedModule { }

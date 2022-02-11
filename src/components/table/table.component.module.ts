import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent
  ],
  imports: [MatTableModule, MatPaginatorModule]
})
export class TableComponentModule { }

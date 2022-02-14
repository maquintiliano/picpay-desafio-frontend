import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent
  ],
  imports: [MatTableModule, MatPaginatorModule, BrowserModule]
})
export class TableComponentModule { }

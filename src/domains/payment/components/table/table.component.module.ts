import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent
  ],
  imports: [MatTableModule, MatPaginatorModule, BrowserModule, MatFormFieldModule, MatInputModule]
})
export class TableComponentModule { }

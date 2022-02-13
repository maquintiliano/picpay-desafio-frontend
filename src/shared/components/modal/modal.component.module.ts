import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ModalComponent,
  ],
  exports: [
    ModalComponent
  ],
  imports: [MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, BrowserModule, ReactiveFormsModule]
})
export class ModalComponentModule { }

import { NgModule } from "@angular/core";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { TasksPageComponent } from "./tasks-page.component";
import { TableComponentModule } from "src/components/table/table.component.module";
import { BrowserModule } from "@angular/platform-browser";
import { ModalComponentModule } from "src/shared/components/modal/modal.component.module";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    TasksPageComponent
  ],
  exports: [
    TasksPageComponent
  ],
  imports: [NavbarModule, TableComponentModule, BrowserModule, ModalComponentModule, MatDialogModule]
})
export class TasksPageModule { }

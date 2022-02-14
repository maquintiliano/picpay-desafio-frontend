import { NgModule } from "@angular/core";
import { NavbarModule } from "src/domains/shared/components/navbar/navbar.module";
import { TasksPageComponent } from "./tasks-page.component";
import { TableComponentModule } from "src/domains/payment/components/table/table.component.module";
import { BrowserModule } from "@angular/platform-browser";
import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponentModule } from "../../components/modal/modal.component.module";

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

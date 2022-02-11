import { NgModule } from "@angular/core";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { TasksPageComponent } from "./tasks-page.component";
import { TableComponentModule } from "src/components/table/table.component.module";

@NgModule({
  declarations: [
    TasksPageComponent
  ],
  exports: [
    TasksPageComponent
  ],
  imports: [NavbarModule, TableComponentModule],
  providers: []
})
export class TasksPageModule { }

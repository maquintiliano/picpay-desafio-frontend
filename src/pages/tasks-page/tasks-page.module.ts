import { NgModule } from "@angular/core";
import { NavbarModule } from "src/components/navbar/navbar.module";
import { TasksPageComponent } from "./tasks-page.component";

@NgModule({
  declarations: [
    TasksPageComponent
  ],
  exports: [
    TasksPageComponent
  ],
  imports: [NavbarModule],
  providers: []
})
export class TasksPageModule { }

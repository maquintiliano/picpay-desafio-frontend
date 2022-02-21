import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
	},
	{
		path: 'tasks',
		component: TasksListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

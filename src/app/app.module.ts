import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
	MatCheckboxModule,
	MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		TasksListComponent,
		TaskCreateComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		HttpClientModule,
		MatSnackBarModule,
		MatCheckboxModule,
		MatDialogModule,
		MatDatepickerModule,
	],
	providers: [
		{
			provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
			useValue: { clickAction: 'noop' },
		},
	],
	bootstrap: [AppComponent],
	entryComponents: [TaskCreateComponent, TaskDeleteComponent],
})
export class AppModule {}

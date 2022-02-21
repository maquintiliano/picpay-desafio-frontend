import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from 'src/app/shared/tasks.service';
import { TaskCreateComponent } from '../task-create/task-create.component';
import { TaskDeleteComponent } from '../task-delete/task-delete.component';
import { Task } from '../task.model';

@Component({
	selector: 'app-tasks-list',
	templateUrl: './tasks-list.component.html',
	styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
	listData: MatTableDataSource<Task>;
	displayedColumns: string[] = [
		'name',
		'title',
		'date',
		'value',
		'isPayed',
		'action',
	];
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) page: MatPaginator;
	searchKey: string;
	constructor(private taskService: TaskService, private dialog: MatDialog) {}

	ngOnInit(): void {
		let array = [];
		this.taskService.read().subscribe((list) => {
			array = list.map((listItem) => {
				return { key: listItem.id, ...listItem };
			});
			this.listData = new MatTableDataSource(array);
			this.listData.sort = this.sort;
			this.listData.paginator = this.page;
			this.listData.filterPredicate = (data: Task, filtersJson: string) => {
				const matchFilter = [];
				const filters = JSON.parse(filtersJson);

				filters.forEach((filter) => {
					const val = data[filter.id] === null ? '' : data[filter.id];
					matchFilter.push(
						val.toLowerCase().includes(filter.value.toLowerCase())
					);
				});
				return matchFilter.every(Boolean);
			};
		});
	}

	applyFilter(filterValue: string) {
		const tableFilters = [];
		tableFilters.push({
			id: 'name',
			value: filterValue,
		});

		this.listData.filter = JSON.stringify(tableFilters);
		if (this.listData.paginator) {
			this.listData.paginator.firstPage();
		}
	}

	onCreate() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '50%';
		this.dialog.open(TaskCreateComponent, dialogConfig);
	}

	onEdit(id: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '50%';
		this.taskService.setId(id);
		this.dialog.open(TaskCreateComponent, dialogConfig);
	}

	onDelete(id: number) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		dialogConfig.width = '40%';
		this.taskService.setId(id);
		this.dialog.open(TaskDeleteComponent, dialogConfig);
	}
}

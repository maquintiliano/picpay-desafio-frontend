import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/shared/common.service';
import { TaskService } from 'src/app/shared/tasks.service';
import { Task } from '../task.model';
import * as moment from 'moment';

@Component({
	selector: 'app-task-delete',
	templateUrl: './task-delete.component.html',
	styleUrls: ['./task-delete.component.scss'],
})
export class TaskDeleteComponent implements OnInit {
	task: Task;
	constructor(
		private taskService: TaskService,
		private commonService: CommonService,
		private dialogRef: MatDialogRef<TaskDeleteComponent>
	) {}

	ngOnInit(): void {
		let dateOut: moment.Moment;
		let id = this.taskService.getId();
		this.taskService.readById(id).subscribe((task) => {
			dateOut = moment(task.date);
			this.task = {
				id: task.id,
				name: task.name,
				value: task.value,
				title: task.title,
				date: dateOut.format('DD/MM/yyyy'),
			};
		});
	}

	onClose() {
		this.dialogRef.close();
		this.taskService.resetForm();
	}

	deleteTask(id: number): void {
		this.taskService.delete(id).subscribe(() => {
			this.commonService.showMessage('Pagamento excluído!');
		});
		this.onClose();
		setTimeout(() => {
			location.reload();
		}, 1000);
	}
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/shared/common.service';
import { TaskService } from 'src/app/shared/tasks.service';
import { Task } from '../task.model';

@Component({
	selector: 'app-task-create',
	templateUrl: './task-create.component.html',
	styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
	task: Task = {
		name: '',
		title: '',
		value: null,
		date: '',
	};

	constructor(
		private taskService: TaskService,
		private commonService: CommonService,
		private dialogRef: MatDialogRef<TaskCreateComponent>
	) {}

	ngOnInit(): void {
		let id = this.taskService.getId();
		if (id !== null) {
			this.taskService.readById(id).subscribe((task) => (this.task = task));
		}
	}

	createTask() {
		this.taskService.create(this.task).subscribe(() => {
			this.commonService.showMessage('Pagamento registrado!');
		});
		this.onClose();
		setTimeout(() => {
			location.reload();
		}, 1000);
	}

	onClose() {
		this.dialogRef.close();
		this.taskService.resetForm();
	}

	editTask() {
		this.taskService.update(this.task).subscribe(() => {
			this.commonService.showMessage('Pagamento atualizado!');
		});
		this.onClose();
		setTimeout(() => {
			location.reload();
		}, 1000);
	}
}

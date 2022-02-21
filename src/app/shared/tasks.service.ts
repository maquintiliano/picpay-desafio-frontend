import { Injectable } from '@angular/core';
import { Task } from '../components/tasks/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class TaskService {
	baseUrl = 'http://localhost:3000/tasks';

	task: Task = {
		id: null,
		name: '',
		username: '',
		title: '',
		value: null,
		date: '',
		image: '',
		isPayed: false,
	};

	constructor(private http: HttpClient) {}

	resetForm() {
		return (this.task = {
			id: null,
			name: '',
			username: '',
			title: '',
			value: null,
			date: '',
			image: '',
			isPayed: false,
		});
	}
	getId() {
		return this.task.id;
	}

	setId(id: number) {
		return (this.task.id = id);
	}

	create(task: Task): Observable<Task> {
		return this.http.post<Task>(this.baseUrl, task);
	}

	read(): Observable<Task[]> {
		return this.http.get<Task[]>(this.baseUrl);
	}

	readById(id: number): Observable<Task> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Task>(url);
	}

	update(task: Task): Observable<Task> {
		const url = `${this.baseUrl}/${task.id}`;
		return this.http.put<Task>(url, task);
	}

	delete(id: number): Observable<Task> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.delete<Task>(url);
	}
}

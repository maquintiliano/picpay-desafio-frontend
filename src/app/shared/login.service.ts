import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from '../components/login/login.model';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	loginUrl = 'http://localhost:3000/account';

	constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

	showMessage(msg: string, isError: boolean = false): void {
		this.snackBar.open(msg, '', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: isError ? ['msg-error'] : ['msg-success'],
		});
	}

	errorHandler(): Observable<any> {
		this.showMessage('Login inválido', true);
		return EMPTY;
	}

	login(data: Auth): Observable<Auth[]> {
		const url = `${this.loginUrl}?email=${data.email}&password=${data.password}`;
		return this.http.get<Auth[]>(url);
	}
}

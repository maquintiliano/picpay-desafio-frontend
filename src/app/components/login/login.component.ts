import { LoginService } from '../../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './login.model';
import { CommonService } from 'src/app/shared/common.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	hide: boolean = true;
	auth: Auth = {
		email: '',
		password: '',
	};
	constructor(
		private router: Router,
		private loginService: LoginService,
		private commonService: CommonService
	) {}

	ngOnInit(): void {}

	getAuthenticate(): void {
		this.loginService.login(this.auth).subscribe((response) => {
			if (response.length > 0) {
				this.commonService.showMessage('Login realizado!');
				this.router.navigate(['/tasks']);
			} else {
				this.commonService.errorHandler('Login inválido!');
			}
		});
	}
}

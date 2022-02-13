import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';
import { LoginForm } from './login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public typeInput: string = 'password';
  private _form: LoginForm;

  public get form(): LoginForm {
    return this._form;
  }

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this._form = new LoginForm();
  }

  public isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }

  public viewPassword(): void {
    if (this.typeInput === 'text') {
      this.typeInput = 'password';
      return;
    }
    this.typeInput = 'text';
  }

  public submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
        const params: URLSearchParams = new URLSearchParams();
        params.append('email', this.form.email.value);
        params.append('password', this.form.password.value);
        this.get(params);
    }
  }

  public get(params: URLSearchParams): void {
    this.usuarioService.getByFilter(params).subscribe(() => {
      this.router.navigate(['/pagamentos'])
    })
  }
}

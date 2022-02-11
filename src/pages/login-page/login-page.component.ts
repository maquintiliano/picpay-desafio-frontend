import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/services/AccountService';
import { LocalStorageService } from 'src/services/LocalStorageService';
import { User } from 'src/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {

  constructor(private formBuilder: FormBuilder,
    private accountService: AccountService,
    private localStorage: LocalStorageService) { }

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  private subscriptions: Subscription[] = []

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  public storeLoginCredentials(user: User): void {
    this.localStorage.set('id', user.id)
  }

  public onSubmit(): void {
    const userInfos: User = this.loginForm?.value
    this.subscriptions.push(this.accountService.login(userInfos)
      .subscribe((user: User) => { this.storeLoginCredentials(user) }))
  }
}

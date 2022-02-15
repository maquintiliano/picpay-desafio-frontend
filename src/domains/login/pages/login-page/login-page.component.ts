import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/domains/login/services/AccountService';
import { User } from 'src/domains/login/models/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
  ) { }

  public loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  private subscriptions: Subscription[] = [];
  public errorFeedback: boolean = false;

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  public onSubmit(): void {
    const userInfos: User = this.loginForm?.value
    this.subscriptions.push(
      this.accountService.login(userInfos).subscribe(
        () => this.accountService.setUserLogged(),
        () => this.handleLoginFailed(),
      )
    )
  }

  private handleLoginFailed(): void {
    this.loginForm.reset()
    this.handleErrorFeedback()
  }

  private handleErrorFeedback(): void {
    this.errorFeedback = true;
    setTimeout(() => { this.errorFeedback = false }, 3000)
  }
}

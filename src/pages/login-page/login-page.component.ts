import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/services/AccountService';
import { LocalStorageService } from 'src/services/LocalStorageService';
import { User } from 'src/utils/interfaces/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private localStorage: LocalStorageService
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
    // this.accountService.login(userInfos)
    // this.subscriptions.push(
    //   this.accountService.bla(userInfos).subscribe(
    //     () => this.storeLoginCredentials(userInfos),
    //     () => this.handleLoginFailed(),
    //   )
    // )
  }

  public storeLoginCredentials(user: User): void {
    this.localStorage.set('id', user.id)
    console.log('deu bom')
  }

  private handleLoginFailed(): void {
    console.log('deu ruim')
    this.loginForm.reset()
    this.handleErrorFeedback()
  }

  private handleErrorFeedback(): void {
    this.errorFeedback = true;
    setTimeout(() => { this.errorFeedback = false }, 3000)
  }
}

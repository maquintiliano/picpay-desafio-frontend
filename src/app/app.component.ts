import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AccountService } from 'src/services/AccountService';
import { User } from 'src/utils/interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogged$: any;

  constructor(private accountService: AccountService) { }

  private subscriptions: Subscription[] = []

  ngOnInit(): void {

    // this.accountService.login()
    // console.log('oi')
    // this.isLogged$ = this.accountService.isUserLogged()
    // console.log(this.isLogged$)
  }

  getLoginAttempt(currentUser: User) {
    // this.accountService.login(currentUser)
  }
}

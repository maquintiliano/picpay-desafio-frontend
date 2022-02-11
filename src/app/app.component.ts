import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AccountService } from 'src/services/AccountService';

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
    // console.log('oi')
    // this.isLogged$ = this.accountService.isUserLogged()
    // console.log(this.isLogged$)
  }
}

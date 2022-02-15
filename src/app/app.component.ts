import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/domains/login/services/AccountService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogged$: Observable<boolean>;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.isLogged$ = this.accountService.isUserLogged()
  }
}

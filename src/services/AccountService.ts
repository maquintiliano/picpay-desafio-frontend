import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/User";

@Injectable({
  providedIn: 'root',
})

export class AccountService {
  constructor(private httpClient: HttpClient) { }

  public accountUrl = `http://localhost:3000/account`
  private isLogged = new BehaviorSubject<boolean>(false)

  public login(user: User) {
    return this.httpClient.post(this.accountUrl, { user })
  }

  public isUserLogged(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  public setUserLogged(): void {
    this.isLogged.next(true)
  }

  public setUserLoggedOut(): void {
    this.isLogged.next(false)
  }
}

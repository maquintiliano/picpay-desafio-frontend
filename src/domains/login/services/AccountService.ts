import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { User } from "src/domains/login/models/User";
import { mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class AccountService {
  constructor(private httpClient: HttpClient) { }

  public accountUrl = `http://localhost:3000/account`
  private isLogged = new BehaviorSubject<boolean>(false)

  public login(currentUser: User) {
    return this.getAuthenticUserCredentials().pipe(
      mergeMap(authenticUser => this.isUserAuthentic(authenticUser[0], currentUser))
    )
  }

  private getAuthenticUserCredentials() {
    return this.httpClient.get<User[]>(this.accountUrl)
  }

  private isUserAuthentic(authenticUser: User, currentUser: User): Observable<boolean> {
    return (authenticUser.email === currentUser.email &&
      authenticUser.password === currentUser.password) ? of(true) : throwError(false)
  }

  public isUserLogged(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  public setUserLogged(): void {
    this.isLogged.next(true)
  }
}

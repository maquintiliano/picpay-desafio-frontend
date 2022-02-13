import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, concat, Observable, of, scheduled, throwError } from "rxjs";
import { User } from "src/utils/interfaces/User";
import { LocalStorageService } from "./LocalStorageService";
import { concatMapTo, delay, take, switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class AccountService {
  constructor(private httpClient: HttpClient) { }

  public accountUrl = `http://localhost:3000/account`
  private isLogged = new BehaviorSubject<boolean>(undefined)

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  public bla(currentUser: User) {
    return this.getAuthenticUserCredentials().subscribe((authenticUser) => { })
  }

  // public login(currentUser: User) {
  //   this.getAuthenticUserCredentials()
  //     .pipe(switchMap(data => return this.isUserAuthentic(data[0], currentUser)))
  // }

  private getAuthenticUserCredentials() {
    return this.httpClient.get<User[]>(this.accountUrl)
  }

  private isUserAuthentic(authenticUser: User, currentUser: User): boolean {
    return authenticUser.email === currentUser.email &&
      authenticUser.password === currentUser.password
  }

  public logout() {
    return this.httpClient.delete<User>(this.accountUrl)
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

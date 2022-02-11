import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/utils/interfaces/User";
import { LocalStorageService } from "./LocalStorageService";

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

  public login(user: User): Observable<User> {
    return this.httpClient.post<User>(this.accountUrl, { user },
      { headers: this.headers })
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

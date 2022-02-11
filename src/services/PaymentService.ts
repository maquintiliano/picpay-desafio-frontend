import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Payment } from "src/utils/interfaces/Payment";

@Injectable({
  providedIn: 'root',
})

export class PaymentsService {
  constructor(private httpClient: HttpClient) { }

  public paymentsUrl = `http://localhost:3000/tasks`

  public getPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.paymentsUrl)
  }
}

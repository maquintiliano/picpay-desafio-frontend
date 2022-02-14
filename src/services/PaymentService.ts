import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Payment } from "src/utils/interfaces/Payment";

@Injectable({
  providedIn: 'root',
})

export class PaymentsService {
  constructor(private httpClient: HttpClient) { }

  public currentPayment = new Subject<Payment>()

  public paymentsUrl = 'http://localhost:3000/tasks'

  public getPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.paymentsUrl)
  }

  public postNewPayment(newPayment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(this.paymentsUrl, newPayment)
  }

  public updatePayment(payment: Payment): Observable<Payment> {
    return this.httpClient.put<Payment>(`${this.paymentsUrl}/${payment.id}`, payment)
  }

  public getCurrentPayment(): Observable<Payment> {
    return this.currentPayment.asObservable()
  }

  public setCurrentPayment(payment: Payment): void {
    this.currentPayment.next(payment)
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { take, tap } from "rxjs/operators";
import { Payment } from "src/domains/payment/models/Payment";

@Injectable({
  providedIn: 'root',
})

export class PaymentsService {
  constructor(private httpClient: HttpClient) { }

  public paymentsUrl = 'http://localhost:3000/tasks';
  public payments = new BehaviorSubject<Payment[]>([]);

  public getPayments(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(this.paymentsUrl)
  }

  public postPayment(payment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(this.paymentsUrl, payment)
  }

  public updatePayment(payment: Payment): Observable<Payment> {
    return this.httpClient.put<Payment>(`${this.paymentsUrl}/${payment.id}`, payment)
  }

  public deletePayment(payment: Payment): Observable<any> {
    return this.httpClient.delete<Payment>(`${this.paymentsUrl}/${payment.id}`)
  }

  public setPayments(payments: Payment[]) {
    this.payments.next(payments)
  }

  // private formatPayment(payment: Payment): Payment {
  //   return {
  //     value:
  //   }
  // }

  public getPaymentsBLA(): Observable<Payment[]> {
    console.log('oi')
    return this.payments.asObservable()
  }
}

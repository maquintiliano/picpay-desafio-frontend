import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Payment } from "src/domains/payment/models/payment";
import { formatISOFormatToDDMMYYYY, formatNumberToCurrencyString, } from "../utils/format";

@Injectable({
  providedIn: 'root',
})

export class PaymentService {
  constructor(private httpClient: HttpClient) { }

  public paymentsUrl = 'http://localhost:3000/tasks';
  public payments = new BehaviorSubject<Payment[]>([]);

  public getPayments() {
    return this.httpClient.get<Payment[]>(this.paymentsUrl).pipe(
      map((payments: Payment[]) => {
        return payments.map((payment) => this.formatPaymentToClient(payment))
      })
    )
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

  private formatPaymentToClient(payment: Payment): Payment {
    return {
      ...payment,
      value: formatNumberToCurrencyString(payment.value),
      date: formatISOFormatToDDMMYYYY(payment.date)
    }
  }
}

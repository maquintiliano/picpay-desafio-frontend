import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/services/PaymentService';
import { Payment } from 'src/utils/interfaces/Payment';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})

export class TasksPageComponent implements OnInit {
  constructor(private paymentsService: PaymentsService,
    private changeDetectorRef: ChangeDetectorRef) { }

  public paymentsData: Payment[] = []

  ngOnInit() {
    this.paymentsService.getPayments().subscribe((paymentsList: Payment[]) => {
      console.log(paymentsList)
      this.paymentsData = paymentsList
      this.changeDetectorRef.detectChanges();
    })
  }
}

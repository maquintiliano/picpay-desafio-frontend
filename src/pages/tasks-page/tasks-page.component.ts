import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsService } from 'src/services/PaymentService';
import { ModalComponent } from 'src/shared/components/modal/modal.component';
import { Payment } from 'src/utils/interfaces/Payment';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})


export class TasksPageComponent implements OnInit {
  constructor(
    private paymentsService: PaymentsService,
    public dialog: MatDialog
  ) { }

  public paymentsData: Payment[] = []

  ngOnInit() {
    this.paymentsService.getPayments().subscribe((paymentsList: Payment[]) => {
      this.paymentsData = paymentsList
    })
  }

  public onAddPayment() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Adicionar pagamento',
        payment: null
      },
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result: Payment | null) => {
      if (result) {
        this.addNewPayment(result)
      }
    })
  }

  public setPaymentStatus(payment: Payment) {
    this.paymentsService.setPaymentStatus(payment).subscribe()
  }

  public addNewPayment(newPayment: Payment) {
    this.paymentsService.postNewPayment(newPayment).subscribe()
  }
}

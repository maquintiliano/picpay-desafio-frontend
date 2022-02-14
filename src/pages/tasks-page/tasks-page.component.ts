import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsService } from 'src/services/PaymentService';
import { ModalComponent, PaymentAction } from 'src/shared/components/modal/modal.component';
import { Payment } from 'src/utils/interfaces/Payment';

interface HandleablePayment {
  payment: Payment
  action: PaymentAction
}

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
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
    this.openModal('Adicionar pagamento', null, PaymentAction.Save)
  }

  public onEditPayment(paymentToBeEdited: Payment) {
    this.openModal('Editar pagamento', paymentToBeEdited, PaymentAction.Edit)
  }

  public updatePayment(payment: Payment) {
    this.paymentsService.updatePayment(payment).subscribe()
  }

  public addNewPayment(newPayment: Payment) {
    this.paymentsService.postNewPayment(newPayment).subscribe()
  }

  private openModal(title: string, payment: Payment | null, action: PaymentAction) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title,
        payment,
        action,
      },
      width: '600px',
    })

    dialogRef.afterClosed().subscribe((result: HandleablePayment | null) => {
      if (!result) { return; }
      console.log(result)

      if (result.action === PaymentAction.Save) this.addNewPayment(result.payment)
      if (result.action === PaymentAction.Edit) this.updatePayment(result.payment)
      // if(result.action === PaymentAction.Delete) this.deletePayment(result.payment)
    })
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsService } from 'src/domains/payment/services/PaymentService';
import { ModalComponent, PaymentAction } from 'src/domains/payment/components/modal/modal.component';
import { Payment } from 'src/domains/payment/models/Payment';
import { BehaviorSubject, Subscription } from 'rxjs';

interface HandleablePayment {
  payment: Payment
  action: PaymentAction
}

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
})

export class TasksPageComponent implements OnInit, OnDestroy {
  public payments$: BehaviorSubject<Payment[]>;
  public subscriptions: Subscription[] = [];

  constructor(
    private paymentsService: PaymentsService,
    public dialog: MatDialog) { this.payments$ = new BehaviorSubject<Payment[]>([]) };

  ngOnInit(): void {
    this.refresh();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private refresh(): void {
    this.subscriptions.push(this.paymentsService.getPayments().subscribe(res => {
      this.payments$.next(res);
    }));
  }

  public onAddPayment(): void {
    this.openModal('Adicionar pagamento', null, PaymentAction.Save)
  }

  public onEditPayment(paymentToBeEdited: Payment): void {
    this.openModal('Editar pagamento', paymentToBeEdited, PaymentAction.Edit)
  }

  public onDeletePayment(paymentToBeDeleted: Payment): void {
    this.openModal('Excluir pagamento', paymentToBeDeleted, PaymentAction.Delete)
  }

  private addPayment(newPayment: Payment): void {
    this.subscriptions.push(
      this.paymentsService.postPayment(newPayment).pipe().subscribe(() => this.refresh()));
  }

  public updatePayment(paymentToBeEdited: Payment): void {
    this.subscriptions.push(
      this.paymentsService.updatePayment(paymentToBeEdited).pipe().subscribe(() => this.refresh()));
  }

  private deletePayment(paymentToBeDeleted: Payment): void {
    this.subscriptions.push(
      this.paymentsService.deletePayment(paymentToBeDeleted).pipe().subscribe(() => this.refresh()));
  }

  private openModal(title: string, payment: Payment | null, action: PaymentAction): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title,
        payment,
        action,
      },
      width: '600px',
    })

    dialogRef.afterClosed().subscribe((result: HandleablePayment | null) => {
      this.handleDialogResponse(result)
    })
  }

  private handleDialogResponse(response: HandleablePayment | null): void {
    if (!response) { return; }

    if (response.action === PaymentAction.Save) this.addPayment(response.payment)
    if (response.action === PaymentAction.Edit) this.updatePayment(response.payment)
    if (response.action === PaymentAction.Delete) this.deletePayment(response.payment)
  }
}

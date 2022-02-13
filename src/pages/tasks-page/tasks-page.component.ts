import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentsService } from 'src/services/PaymentService';
import { ModalComponent } from 'src/shared/components/modal/modal.component';
import { Payment } from 'src/utils/interfaces/Payment';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})

export class TasksPageComponent implements OnInit {
  animal: string;
  name: string;

  constructor(
    private paymentsService: PaymentsService,
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  public paymentsData: Payment[] = []

  ngOnInit() {
    this.paymentsService.getPayments().subscribe((paymentsList: Payment[]) => {
      console.log(paymentsList)
      this.paymentsData = paymentsList
      this.changeDetectorRef.detectChanges();
    })
  }

  public onAddPayment() {
    console.log('oi')
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  public setPaymentStatus(payment: Payment) {
    this.paymentsService.setPaymentStatus(payment).subscribe(console.log)
  }
}

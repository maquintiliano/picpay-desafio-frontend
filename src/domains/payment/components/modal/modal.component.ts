import { Component, Inject, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/domains/payment/models/payment';
import { FormBuilder } from '@angular/forms';
import { formatCurrencyStringToNumber } from 'src/domains/payment/utils/format';

export interface ModalData {
  title: string;
  payment: Payment;
  action: PaymentAction;
}

export enum PaymentAction {
  Save = 'save',
  Edit = 'edit',
  Delete = 'delete',
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalComponent implements AfterViewInit {
  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
  ) { }

  public addPaymentForm = this.formBuilder.group({
    name: '',
    value: '',
    date: '',
    title: '',
  });

  public PaymentAction = PaymentAction

  ngAfterViewInit(): void {
    if (!this.data.payment) { return; }
    this.updateFormValues()
    this.changeDetectorRef.detectChanges()
  }

  private updateFormValues(): void {
    this.addPaymentForm.get('name').setValue(this.data.payment.name)
    this.addPaymentForm.get('value').setValue(this.data.payment.value)
    this.addPaymentForm.get('date').setValue(this.formatDisplayDate(this.data.payment.date))
    this.addPaymentForm.get('title').setValue(this.data.payment.title)
  }

  public onCancel(): void {
    this.dialogRef.close(null);
  }

  public onSave(): void {
    this.addPaymentForm.updateValueAndValidity()
    const action = this.data.action
    const payment = this.createPaymentObject();
    this.dialogRef.close({ payment, action })
  }

  private createPaymentObject(): Payment {
    return {
      ...this.data.payment,
      name: this.addPaymentForm.value.name,
      date: this.formatDateToServer(this.addPaymentForm.value.date),
      title: this.addPaymentForm.value.title,
      value: formatCurrencyStringToNumber(this.addPaymentForm.value.value)
    }
  }

  public formatDisplayDate(date: string[]) {
    return date.slice(0, date.lastIndexOf('/'))
  }

  private formatDateToServer(date: string) {
    const dateToArray = date.split('/').map(element => parseInt(element))
    return new Date(dateToArray[2], dateToArray[1] - 1, dateToArray[0]).toISOString()
  }
}

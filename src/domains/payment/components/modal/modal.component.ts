import { Component, Inject, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/domains/payment/models/Payment';
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
    this.addPaymentForm.get('date').setValue(this.data.payment.date)
    this.addPaymentForm.get('title').setValue(this.data.payment.title)
  }

  public onCancel(): void {
    this.dialogRef.close(null);
  }

  public onSave(): void {
    this.addPaymentForm.updateValueAndValidity()
    const action = this.data.action
    const payment = action === PaymentAction.Save ?
      this.createNewPaymentObject() :
      Object.assign(this.data.payment, this.addPaymentForm.value)
    console.log(payment)
    this.dialogRef.close({ payment, action })
  }

  private createNewPaymentObject(): Payment {
    console.log(this.data.payment.id)
    return {
      name: this.addPaymentForm.value.name,
      date: this.addPaymentForm.value.date,
      title: this.addPaymentForm.value.title,
      value: formatCurrencyStringToNumber(this.addPaymentForm.value.value)
    }
  }
}

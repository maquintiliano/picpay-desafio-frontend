import { Component, Inject, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Payment } from 'src/utils/interfaces/Payment';
import { FormBuilder } from '@angular/forms';

export interface ModalData {
  title: string;
  payment: Payment;
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
    username: '',
    value: '',
    date: '',
    title: '',
  });

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges()
  }

  public onCancel() {
    this.dialogRef.close(null);
  }

  public onSave() {
    const newPaymentInfos = this.addPaymentForm?.value
    this.dialogRef.close(newPaymentInfos)
  }
}

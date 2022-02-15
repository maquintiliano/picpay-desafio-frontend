import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Payment } from 'src/domains/payment/models/Payment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {
  @Input() payments: Observable<Payment[]>
  @Output() onPaymentChange = new EventEmitter<Payment>();
  @Output() onEdit = new EventEmitter<Payment>();
  @Output() onDelete = new EventEmitter<Payment>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  public displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed', 'edit'];
  public dataSource: MatTableDataSource<Payment>;

  constructor() { }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Payment>();
  }

  public ngAfterViewInit(): void {
    this.payments.subscribe((data) => {
      if (data.length) {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public setPaymentStatus(payment: Payment): void {
    this.onPaymentChange.emit(payment)
  }

  public edit(payment: Payment): void {
    this.onEdit.emit(payment)
  }

  public delete(payment: Payment): void {
    this.onDelete.emit(payment)
  }
}

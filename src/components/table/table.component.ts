import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from 'src/utils/interfaces/Payment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input() data: Payment[]
  @Output() onPaymentChange = new EventEmitter<Payment>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed'];
  public dataSource;

  public showOptions: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Payment>(this.data || []);
    this.dataSource.paginator = this.paginator;
  }

  public setPaymentStatus(payment: Payment) {
    this.onPaymentChange.emit(payment)
  }
}

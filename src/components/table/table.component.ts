import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from 'src/utils/interfaces/Payment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

  @Input() data: Payment[]
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns: string[] = ['name', 'title', 'date', 'value', 'isPayed'];
  public dataSource;

  public showOptions: boolean = false;


  ngAfterViewInit() {
    console.log(this.data)
    this.dataSource = new MatTableDataSource<Payment>(this.data || []);
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

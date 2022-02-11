import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Payment {
  name: string;
  title: string;
  date: Date;
  value: string;
  payed: boolean;
  edit: boolean;
}

const ELEMENT_DATA: Payment[] = [
  { title: 'professor', date: new Date(), value: '40', payed: false, name: 'Hydrogen', edit: false },
  { title: 'professor', date: new Date(), value: '40', payed: false, name: 'Helium', edit: false },
  { title: 'professor', date: new Date(), value: '40', payed: false, name: 'Lithium', edit: false },
  { title: 'professor', date: new Date(), value: '40', payed: false, name: 'Beryllium', edit: false },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'title', 'value', 'edit'];
  dataSource = new MatTableDataSource<Payment>(ELEMENT_DATA);

  public showOptions: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
  }

  constructor() { }

  ngOnInit(): void {
  }

  public handleMouseOver(row) {

  }

}

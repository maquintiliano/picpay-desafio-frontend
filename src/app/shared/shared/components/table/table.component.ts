import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { EnumFilter } from 'src/app/core/enums/enum-filter';
import { AppTableBodyDirective } from './configs/app-table-body.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ContentChild(AppTableBodyDirective, {static: true, read: TemplateRef }) appTableBody;

  @Input() public items: [];
  @Output() public filters: EventEmitter<any> = new EventEmitter();
  public totalRecods: number;
  public page: number = 1;
  public enumFilter = new EnumFilter().getAllForSelect();
  public form: FormGroup;
  public itemPerPage: number = 10;

constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   this.createForm();
   this.form.get('itemPerPage').valueChanges.subscribe((item) => this.itemPerPage = item );
  }
  
  public createForm(): void {
    this.form = this.formBuilder.group({
      itemPerPage: new FormControl(10),
      filter: new FormControl(null)
    });
  }

  public search() : void {
    this.filters.emit(this.form.get('filter').value);
  }
}
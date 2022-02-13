import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss']
})
export class TemplateModalComponent {

  @Output() public close: EventEmitter<any> = new EventEmitter();
  @Input() public title: string;

  public closeModal(): void {
    this.close.emit();
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,) { }

  ngOnInit(): void {
  }
  public closeModal() {
    this.activeModal.close();
  }

}

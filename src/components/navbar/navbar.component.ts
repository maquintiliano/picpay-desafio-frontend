import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/services/AccountService';
import { LocalStorageService } from 'src/services/LocalStorageService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService: AccountService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
}

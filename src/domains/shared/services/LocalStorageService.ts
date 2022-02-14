import { Injectable } from '@angular/core';
import { AccountService } from '../../login/services/AccountService';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage

  constructor(private accountService: AccountService) {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      this.accountService.setUserLogged()
      return true;
    }
    return false;
  }

  get(key: string): string {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}

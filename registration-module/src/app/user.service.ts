import { Injectable } from '@angular/core';
import { ProductInfo } from './store';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userInfo: ProductInfo;

  constructor() {}

  setValues(values) {
    this.userInfo = values;
  }

  getValues(): ProductInfo {
    return this.userInfo;
  }
}

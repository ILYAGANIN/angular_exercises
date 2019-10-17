import {Injectable, Output} from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {EventEmitter} from 'events';

@Injectable()
export class DataService {
  cars: string[] = ['Audi', 'BMW', 'Ford'];
  result: boolean;

  getData() {
    return this.cars;
  }
  addData(name: string) {
    this.cars.push(name);
  }
  checkData({arr, val}: { arr: any, val: any }) {
    return this.result = arr.some(arrVal => val === arrVal);
  }
}

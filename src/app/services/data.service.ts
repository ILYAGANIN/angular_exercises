import {Injectable} from '@angular/core';

@Injectable(
  {providedIn: 'root',
  })
export class DataService {
  private data: string[] = ['Audi', 'Ford', 'Toyota'];

  getData(): string[] {
    return this.data;
  }
  addData(name: string) {
    this.data.push(name);
  }

}

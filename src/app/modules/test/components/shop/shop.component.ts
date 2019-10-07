import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../services/data.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  cars: string[] = [];
  constructor(private dataService: DataService) {}
  addCar(name: string) {
    this.dataService.addData(name);
  }
  ngOnInit() {
    this.cars = this.dataService.getData();
  }
}

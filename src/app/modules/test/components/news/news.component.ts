import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  cars: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cars = this.dataService.getData();
  }
}

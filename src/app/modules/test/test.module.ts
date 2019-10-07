import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestRoutingModule} from './test-routing.module';
import { NewsComponent } from './components/news/news.component';
import { ShopComponent } from './components/shop/shop.component';
import {FormsModule} from '@angular/forms';
import {DataService} from '../../services/data.service';



@NgModule ({
  declarations: [
    NewsComponent,
    ShopComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule
  ],
  exports: [
    ShopComponent,
    NewsComponent
  ]
})
export class TestModule {}

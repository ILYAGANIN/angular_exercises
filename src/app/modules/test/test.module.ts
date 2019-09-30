import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestRoutingModule} from './test-routing.module';
import { NewsComponent } from './components/news/news.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule ({
  declarations: [
    NewsComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
})
export class TestModule {}

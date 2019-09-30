import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from "./components/news/news.component";
import {ShopComponent} from "./components/shop/shop.component";


const testRoutes: Routes = [
  { path: 'news', component: NewsComponent},
  {path: 'shop', component: ShopComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TestRoutingModule {}

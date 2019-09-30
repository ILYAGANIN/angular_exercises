import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './components/test.component';


const testRoutes: Routes = [
  { path: '', component: TestComponent }
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

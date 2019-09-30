import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './components/test.component';
import {TestRoutingModule} from './test-routing.module';
import {AppComponent} from '../../app.component';

@NgModule ({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  bootstrap: [TestComponent]
})
export class TestModule {}

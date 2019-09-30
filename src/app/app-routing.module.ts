import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent ,
  },
  { path: 'test',
    loadChildren: () => import( './modules/test/test.module' ).then(
      m => m.TestModule),
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

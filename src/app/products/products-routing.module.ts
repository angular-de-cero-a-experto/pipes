import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';


const routes: Routes = [
  {
    path: '',
    component: BasicPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommon',
    component: UnCommonPageComponent
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule { }

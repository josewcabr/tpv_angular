import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SellsComponent} from './sells/sells.component';
import {CustomersComponent} from './customers/customers.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {TaxesComponent} from './taxes/taxes.component';

const routes: Routes = [
  {path: '', component: SellsComponent},
  {path: 'sells', component: SellsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'taxes', component: TaxesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

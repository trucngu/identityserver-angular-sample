import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaleOrdersComponent } from './sale-orders/sale-orders.component';
import { InvoicingComponent } from './invoicing/invoicing.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SaleOrdersComponent,
    InvoicingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }

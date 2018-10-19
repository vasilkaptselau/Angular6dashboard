import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryComponent} from './inventory/inventory.component';
import {PromoComponent} from './promo/promo.component';
import {ShippingComponent} from './shipping/shipping.component';
import {NewOrderComponent} from './new-order/new-order.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'promo', component: PromoComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'addorder', component: NewOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, InventoryComponent, PromoComponent, ShippingComponent, NewOrderComponent]

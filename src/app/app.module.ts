import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {InventoryService} from './services/inventory.service';
import { InventoryTableComponent } from './tables/inventory-table/inventory-table.component';
import { ShippingTableComponent } from './tables/shipping-table/shipping-table.component';
import { PromoListComponent } from './tables/promo-list-table/promo-list.component';
import {ShippingService} from './services/shipping.service';
import {PromoService} from './services/promo.service';
import { NewOrderTableComponent } from './tables/new-order-table/new-order-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewOrderService} from './services/new-order.service';
import { PopUpWindowComponent } from './pop-up-window/pop-up-window.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    HomeComponent,
    NavigationComponent,
    InventoryTableComponent,
    ShippingTableComponent,
    PromoListComponent,
    NewOrderTableComponent,
    PopUpWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
  ],
  providers: [InventoryService,
              ShippingService,
              PromoService,
              NewOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

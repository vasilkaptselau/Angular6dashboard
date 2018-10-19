import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-new-order-table',
  templateUrl: './new-order-table.component.html',
  styleUrls: ['./new-order-table.component.css']
})
export class NewOrderTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns = ['transactionId',
                      'merchantId',
                      'qtyOrdered',
                      'name',
                      'description',
                      'price',
                      'itemId',
                      'taxTotal',
                      'shippingTotal',
                      'discountTotal',
                      'orderSubTotal',
                      'promoAmt',
                      'promoId',
                      'promotionName',
                      'start',
                      'end',
                      'minimumOrderValue',
                      'promotionType',
                      'merchantOrderReference',
                      'orderDate',
                      'signature'];

  constructor() { }

  ngOnInit() {
  }

}

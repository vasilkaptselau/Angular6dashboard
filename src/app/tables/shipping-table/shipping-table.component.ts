import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import {ShippingService} from '../../services/shipping.service';

@Component({
  selector: 'app-shipping-table',
  templateUrl: './shipping-table.component.html',
  styleUrls: ['./shipping-table.component.css']
})
export class ShippingTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  displayedColumns = ['shipOptionId', 'shipOptionName', 'carrierName', 'shipCost'];

  constructor(private shippingService: ShippingService) {}

  ngOnInit() {
    this.shippingService.getShipping().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

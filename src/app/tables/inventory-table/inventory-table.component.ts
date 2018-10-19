import {Component, OnInit, ViewChild} from '@angular/core';
import {merge, Observable, of as observableOf} from 'rxjs';
import {MatPaginator, MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import { InventoryService} from '../../services/inventory.service';
import {ShippingService} from '../../services/shipping.service';
import {IcurrentInventory} from '../../icurrent-inventory';
import {HttpClient} from '@angular/common/http';
import {catchError, map, startWith, switchMap} from 'rxjs/internal/operators';


@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent implements OnInit {

  displayedColumns = ['itemId', 'name', 'description', 'price', 'inStock'];
  exampleDatabase: InventoryService | null;
  dataSource: IcurrentInventory[] = [];

  resultsLength;
  isLoadingResults = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private inventoryService: InventoryService, private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new InventoryService(this.http);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase.getInventory();
        }),
        map(data => {
          this.isLoadingResults = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource = data);

  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue;
  }
}





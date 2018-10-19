import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IcurrentInventory} from '../icurrent-inventory';

export interface InventoryApi {
  items: IcurrentInventory[];
  total_count: number;
}

@Injectable()
export class InventoryService {

  constructor(private http: HttpClient) { }

  getInventory(): Observable< InventoryApi> {
  const _url = 'http://jst.edchavez.com/api/inventory/getInventory/';
       return this.http.get<InventoryApi>(_url);
  }

}

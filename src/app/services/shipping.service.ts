import { Injectable } from '@angular/core';
import {IcurrentShipping} from '../icurrent-shipping';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private _url = 'http://jst.edchavez.com/api/shipping/';

  constructor(private http: HttpClient) { }

  getShipping(): Observable<IcurrentShipping[]> {
    return this.http.get<IcurrentShipping[]>(this._url);
  }
}

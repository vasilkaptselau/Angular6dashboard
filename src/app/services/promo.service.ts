import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IcurrentPromoList} from '../icurrent-promo-list';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  private _url = 'http://jst.edchavez.com/api/promo/';

  constructor(private http: HttpClient) { }

  getPromo(): Observable<IcurrentPromoList[]> {
    return this.http.get<IcurrentPromoList[]>(this._url);
  }
}

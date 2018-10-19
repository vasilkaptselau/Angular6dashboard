import { Injectable } from '@angular/core';
import {Tiles} from './models/tiles';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {


  tiles: Tiles[] = [
    {text: 'Promo', cols: 2, rows: 2, color: '', url: '/promo'},
    {text: 'Inventory', cols: 2, rows: 2, color: '#fff', url: '/inventory'},
    {text: 'Add Order', cols: 2, rows: 2, color: '#fff', url: '/addorder'},
    {text: 'Shipping', cols: 2, rows: 2, color: '', url: '/shipping'},
  ];
  constructor() { }
}

import { Injectable } from '@angular/core';
import {NewOrder} from '../newOrder';

@Injectable({
  providedIn: 'root'
})
export class NewOrderService {

  newOrder: NewOrder[] = [];
  constructor() { }

  addNewOrder(order: NewOrder){
    this.newOrder.push(order);
  }
  deleteContact(_id: number) {
    const contact = this.newOrder.findIndex(c => c.id === _id);
    this.newOrder.splice(contact, 1);
  }

  getAllContacts() {
    return this.newOrder;
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {NewOrderService} from '../services/new-order.service';
import {PopUpWindowComponent} from '../pop-up-window/pop-up-window.component';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  isPopUpOpened = true;

  constructor(private dialog?: MatDialog,
              private newOrderService?: NewOrderService) { }

  ngOnInit() {}

  addOrder() {
    this.isPopUpOpened = true;
    const dialogRef = this.dialog.open(PopUpWindowComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopUpOpened = false;
    });
  }
  editOrder(id: number) {
    this.isPopUpOpened = true;
    const order = this.newOrderService.getAllContacts().find(c => c.id === id);
    const dialogRef = this.dialog.open(PopUpWindowComponent, {
      data: order
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopUpOpened = false;
    });
  }
  deleteOrder(id: number) {
    this.newOrderService.deleteContact(id);
  }
}

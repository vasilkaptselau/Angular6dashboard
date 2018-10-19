import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NewOrderService} from '../services/new-order.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NewOrderComponent} from '../new-order/new-order.component';

@Component({
  selector: 'app-pop-up-window',
  templateUrl: './pop-up-window.component.html',
  styleUrls: ['./pop-up-window.component.css']
})
export class PopUpWindowComponent implements OnInit {

  public newOrderForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<NewOrderComponent>,
              private newOrderService: NewOrderService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.newOrderForm = this.formBuilder.group({
      transactionId: [this.data.transactionId],
      merchantId: [this.data.merchantId, [Validators.required]],
      qtyOrdered: [this.data.qtyOrdered, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      description: [this.data.description, [Validators.required]],
      price: [this.data.price, [Validators.required]],
      itemId: [this.data.itemId, [Validators.required]],
      taxTotal: [this.data.taxTotal, [Validators.required]],
      shippingTotal: [this.data.shippingTotal, [Validators.required]],
      discountTotal: [this.data.discountTotal, [Validators.required]],
      orderSubTotal: [this.data.orderSubTotal, [Validators.required]],
      promoAmt: [this.data.promoAmt, [Validators.required]],
      promoId: [this.data.promoId, [Validators.required]],
      promotionName: [this.data.promotionName, [Validators.required]],
      start: [this.data.start, [Validators.required]],
      end: [this.data.end, [Validators.required]],
      minimumOrderValue: [this.data.minimumOrderValue, [Validators.required]],
      promotionType: [this.data.promotionType, [Validators.required]],
      merchantOrderReference: [this.data.merchantOrderReference, [Validators.required]],
      orderDate: [this.data.orderDate, [Validators.required]],
      signature: [this.data.signature, [Validators.required]]
    });
  }

  onSubmit() {
    this.newOrderService.addNewOrder(this.newOrderForm.value);
    this.dialogRef.close();

  }

}

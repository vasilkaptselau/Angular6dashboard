export class NewOrder {
  id: number;
  transactionId: string;
  merchantId: string;
  qtyOrdered: number;
  name: string;
  description: string;
  price: number;
  itemId: string;
  taxTotal: number;
  shippingTotal: number;
  discountTotal: number;
  orderSubTotal: number;
  promoAmt: number;
  promoId: string;
  promotionName: string;
  start: string;
  end: string;
  minimumOrderValue: number;
  promotionType: string;
  merchantOrderReference: string;
  orderDate: string;
  signature: string;
}

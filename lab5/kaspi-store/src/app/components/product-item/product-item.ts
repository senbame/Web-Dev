import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.models';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
  imports: [DecimalPipe]
})
export class ProductItem {

  @Input() product!: Product;

  @Output() liked = new EventEmitter<Product>();
  @Output() deleted = new EventEmitter<Product>();

  like() {
    this.liked.emit(this.product);
  }

  delete() {
    this.deleted.emit(this.product);
  }
  shareWhatsApp(product: Product) {
    const message = `Check out this product: ${product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
  getInstallment(price: number, months: number): number {
      return Math.ceil(price / months);
  }
}



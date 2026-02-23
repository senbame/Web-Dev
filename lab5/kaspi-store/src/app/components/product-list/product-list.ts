import { Component } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.models';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [ProductItem]
})
export class ProductList {

  products: Product[] = [];
  

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  selectedCategoryId: number = 0;
  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;

    if (categoryId === 0) {
      this.products = this.productService.getProducts();
    } else {
      this.products =
        this.productService.getProductsByCategory(categoryId);
    }
  }

  like(product: Product) {
    this.productService.likeProduct(product.id);
  }

  delete(product: Product) {
    if(confirm("Вы уверены, что хотите удалить этот товар?")){
      this.productService.deleteProduct(product.id);
      this.selectCategory(this.selectedCategoryId);
    }
  }
}
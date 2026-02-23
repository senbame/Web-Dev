import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';
import { ProductService } from './services/product';
import { Product } from './models/product.models';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  selectedCategoryId: number | null = null;
  productsToShow: Product[] = [];

  constructor(private productService: ProductService) {}

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.productsToShow = this.productService.getProductsByCategory(categoryId);
  }
}
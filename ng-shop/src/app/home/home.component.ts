import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

}

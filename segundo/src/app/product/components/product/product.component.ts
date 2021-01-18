import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../core/models/product.model';

import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html', // a que archivo html vamos a llamar //deprecated, reemplazar TSlint por ESlint
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();
  constructor(private cartService: CartService) {}
  addCart(): void {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product); //  este es quien va a escuchar dinamicamente 
    this.productClicked.emit(this.product.id);
  }
}

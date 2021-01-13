import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html', // a que archivo html vamos a llamar //deprecated, reemplazar TSlint por ESlint
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();
  addCart(): void {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}

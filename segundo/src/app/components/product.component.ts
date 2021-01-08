import { Component } from '@angular/core';

import{Product} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html', //a que archivo html vamos a llamar
})
export class ProductComponent {
  product = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla',
  };
}

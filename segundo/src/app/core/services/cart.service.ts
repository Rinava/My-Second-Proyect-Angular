import { Injectable } from '@angular/core';
import { Product } from './../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]); // lo inicializo en un array de product vacío
  cart$ = this.cart.asObservable(); // para que cualquiera se suscriba a el para notar los cambios en tiempo real

  constructor() {}
  addCart(product: Product) {
    this.products = [...this.products, product];
    // usa la practica de no mutacion, no usa push, sino que cada vez crea una nueva referencia al arreglo
    this.cart.next(this.products);
    // notifica a todos los componentes subscritos que hubo un cambio, mandandoles una copia del array
  }
}

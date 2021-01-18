import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // queremos transformar el valor que nos llega en uno nuevo
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>; // hago que total sea un observable
  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length) // quiero transformar los productos en su largo
    ); // ya no nos subscribimos, guardamos el valor en un observable, un flujo de datos, nos subscribimos desde template
    // ahora angular se encarga de la suscripcion, no tenemos que desuscribirnos nosotros
  }

  ngOnInit(): void {}
}

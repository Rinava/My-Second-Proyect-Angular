import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'; // queremos transformar el valor que nos llega en uno nuevo
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total = 0;
  constructor(private cartService: CartService) {
    this.cartService.cart$
      .pipe(map((products) => products.length)) // quiero transformar los productos en su largo
      .subscribe((total) => {
        // me llega el total ya transformado gracias al pipe
        this.total = total;
      });
  }

  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'create', component: ProductFormComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'products/create', component: FormProductComponent },
      { path: 'user', component: UserComponent },
    ], // HACE QUE LOS HIJOS TAMBIEN TENGAN LA BARRA DE NAV
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

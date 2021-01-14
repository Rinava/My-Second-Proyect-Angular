import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [{ path: 'create', component: ProductFormComponent }], // HACE QUE LOS HIJOS TAMBIEN TENGAN LA BARRA DE NAV
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

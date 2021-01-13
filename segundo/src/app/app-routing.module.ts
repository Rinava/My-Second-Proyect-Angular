import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      // todos los hijos van a heredar el layout
      {
        // añado la regla de redirect aca porque arriba no se puede
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        // carga un modulo dinamicamente
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
    ],
  },

  {
    path: '**', // significa que no hubo match
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ], // cargan mas rapido los assets y tarda menos el main
  exports: [RouterModule],
})
export class AppRoutingModule {}

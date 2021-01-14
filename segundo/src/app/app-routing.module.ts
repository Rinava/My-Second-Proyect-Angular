import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
        canActivate: [AdminGuard],
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: '**', // significa que no hubo match
    component: PageNotFoundComponent, // tiene que ir ultimo siempre
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ], // cargan mas rapido los assets y tarda menos el main
  exports: [RouterModule],
})
export class AppRoutingModule {}

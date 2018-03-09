import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeComponent } from './products/components/products-home/products-home.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductsHomeComponent
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true
});

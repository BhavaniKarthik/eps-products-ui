import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductListHeaderItemComponent } from './components/product-list-header-item/product-list-header-item.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ProductsHomeComponent, ProductListComponent, NewProductComponent, ProductListHeaderItemComponent],
  providers: [ProductService]

})
export class ProductsModule { }

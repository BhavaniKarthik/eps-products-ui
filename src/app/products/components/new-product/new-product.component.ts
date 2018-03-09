import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  product: Product = {} as Product;
  @Output()
  onProductAdded = new EventEmitter<Product>();
  constructor(private _productService: ProductService) { }

  ngOnInit() {}

  addProduct(){
    this._productService.add(this.product).then((res:Product) => {
      this.onProductAdded.emit(res);
      this._resetFormFields();
    });
  }
  private _resetFormFields(){
    this.product = {} as Product;
  }
}

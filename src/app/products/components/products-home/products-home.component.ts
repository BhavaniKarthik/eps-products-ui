import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-products-home",
  templateUrl: "./products-home.component.html",
  styleUrls: ["./products-home.component.scss"]
})
export class ProductsHomeComponent implements OnInit {
  products: Array<Product> = [] as Array<Product>;
  constructor(
    private _productService: ProductService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._getProducts();
  }

  onProductAdded(newProduct: Product) {
    this.products = this.products.concat(newProduct);
  }

  private _getProducts() {
    this._productService.get().then((res: Array<Product>) => {
      this.products = res;
      this.cdRef.detectChanges();
    });
  }
}

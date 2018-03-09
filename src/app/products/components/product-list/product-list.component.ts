import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { SortField } from '../../models/sort-field';
import { SortOrder } from '../../enums/sort-order.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  readonly DEFAULT_SORT_FIELD: string = 'name';

  @Input() products: Array<Product>;
  public sortField: SortField = {} as SortField;
  private _lastSortedProducts: Array<Product>;
  private _sortedProductsCache = {};

  constructor() { }

  ngOnInit() {
    this.sortField = {
      name: this.DEFAULT_SORT_FIELD,
      order: SortOrder.ASC
    }
  }

  public sort(sortField) {
    this.sortField = sortField;
  }

  /* Computed Property */
  public get sortedProducts() {
    this._resetCacheIfProductsArrayModified();

    var cacheId = this.sortField.name + '-' + this.sortField.order;

    if (!this._sortedProductsCache[cacheId]) {
      this._sortedProductsCache[cacheId] = this.products
        .slice(0)
        .sort((p1: Product, p2: Product) => {
          if (p1[this.sortField.name] < p2[this.sortField.name]) {
            return this.sortField.order === SortOrder.ASC ? -1 : 1;
          }
          if (p1[this.sortField.name] > p2[this.sortField.name]) {
            return this.sortField.order === SortOrder.ASC ? 1 : -1;
          }
          return 0;
        });
    }

    return this._sortedProductsCache[cacheId];
  }

  private _resetCacheIfProductsArrayModified(){
    if (this._lastSortedProducts !== this.products) {
      this._sortedProductsCache = {};
      this._lastSortedProducts = this.products;
    }
  }
}

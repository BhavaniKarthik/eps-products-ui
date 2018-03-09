import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Guid } from '../../shared/services/utils'
import { Promise } from 'q';

@Injectable()
export class ProductService {
  constructor() { }

  //Mock DB.
  //should be deleted when API hookedup
  private _productCollectionDB: Array<Product> = [
    {
      id: Guid.newGuid(),
      name: "Product A",
      price: 292,
      category: "Cloths"
    },
    {
      id: Guid.newGuid(),
      name: "Product B",
      price: 8,
      category: "Toys"
    },
    {
      id: Guid.newGuid(),
      name: "Product C",
      price: 592,
      category: "Sports"
    },
    {
      id: Guid.newGuid(),
      name: "Product D",
      price: 12,
      category: "Electronics"
    }
  ] as Array<Product>;

   get(): Promise<Array<Product>>{
    //todo: API hookup to go here
    return Promise<Array<Product>>((resolve,reject)=> {
      resolve(this._productCollectionDB);
    });
  }

  add(product: Product): Promise<Product>{
    //todo: API hookup to go here
    return Promise<Product>((resolve,reject)=> {
      const newProduct = { ...product };
      newProduct.id = Guid.newGuid();
      this._productCollectionDB = this._productCollectionDB.concat(newProduct);
      resolve(newProduct);
    });;
  }
}

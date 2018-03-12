import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Guid } from '../../shared/services/utils'
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) { }

   get(): Promise<Array<Product>>{
    return this.httpClient.get<Array<Product>>(environment.baseUrl).toPromise();
  }

  add(product: Product): Promise<Product>{
    //todo: API hookup to go here
    return new Promise<Product>((resolve,reject)=> {
      const newProduct = { ...product };
      newProduct.id = Guid.newGuid();
      resolve(newProduct);
    });
  }
}

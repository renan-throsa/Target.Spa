import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product'
import { Observable } from 'rxjs'

@Injectable()
export class ProductService {
  protected _urlService: string = 'http://localhost:5000/api/Product'
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._urlService)
  }

  getProduct(id: number): Observable<Product> {
    return this._http.get<Product>(this._urlService + '/' + id)
  }

  addProduct(product: Product): Observable<any> {
    return this._http.post(this._urlService, product)
  }

  updateProduct(product: Product): Observable<any> {
    return this._http.put(this._urlService, product)
  }

  deletProduct(id: number): Observable<any> {
    return this._http.delete<Product>(this._urlService + '/' + id)
  }
}

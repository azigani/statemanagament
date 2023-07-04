import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Products} from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }


  getAllProducts(): Observable<Products[]> {
    let urlenv = environment.url;
    return this.http.get<Products[]>(urlenv + '/products');

  }

  getAllGetSelectedProducts(): Observable<Products[]> {
    let urlenv = environment.url;
    return this.http.get<Products[]>(urlenv + '/products?selected=true');
  }

  getAllGetAvailableProducts(): Observable<Products[]> {
    let urlenv = environment.url;
    return this.http.get<Products[]>(urlenv + '/products?available=true');
  }


  chercher(keyword:string): Observable<Products[]> {
    let urlenv = environment.url;
    return this.http.get<Products[]>(urlenv + "/products?name_like="+keyword);
  }

  select(product:Products): Observable<Products> {
    product.selected = !product.selected;
    let urlenv = environment.url;
    return this.http.put<Products>(urlenv + "/products/"+product.id,product);
  }


}

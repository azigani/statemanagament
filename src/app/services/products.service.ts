import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
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


  searchProducts(keyword:string): Observable<Products[]> {
    let urlenv = environment.url;
    return this.http.get<Products[]>(urlenv + "/products?name_like="+keyword);
  }

  select(product:Products): Observable<Products> {
    // product.selected = !product.selected;
    let urlenv = environment.url;
    return this.http.put<Products>(urlenv + "/products/"+product.id,{...product});
  }

  supprimer(id:number): Observable<void> {
    let urlenv = environment.url;
    return this.http.delete<void>(urlenv + "/products/"+id);
  }




  save(product:Products): Observable<Products> {
    let urlenv = environment.url;
    return this.http.post<Products>(urlenv + "/products/",product);
  }

 modifier(product:Products): Observable<Products> {
    let urlenv = environment.url;
    return this.http.put<Products>(urlenv + "/products/",product.id);
  }
 getProductById(id:number): Observable<Products> {
    let urlenv = environment.url;
    return this.http.put<Products>(urlenv + "/products/",id);
  }



  // update(id:number): Observable<Products> {
  //   let urlenv = environment.url;
  //   return this.http.put<Products>(urlenv + "/products/",id);
  // }


  products: Products[];
  update(updateProducts: Products): Observable<Products> {
    this.products.map(products => products.id === updateProducts.id ? updateProducts : products);

    return  of(updateProducts);
  }
}

import { catchError } from 'rxjs/operators';

/**
    * @description      : 
    * @author           : Keeggo
    * @group            : 
    * @created          : 11/10/2021 - 04:21:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/10/2021
    * - Author          : Keeggo
    * - Modification    : 
**/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Product } from '../product/product.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products';
  testeUrl = 'http://127.0.0.1:3000/wallet';
  [x: string]: any;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);

  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj), catchError((e) =>
        this.erroHandler(e)
      )
    );
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY
  }
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
  }


  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  consulta(): Observable<any> {
    return this.http.get<any>(this.testeUrl);
  }

  showOnConsole(msg: String): void {
    console.log("x=" + msg)
  }

  showMessage(msg: string, isErro: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isErro ? ['msg-error'] : ['msg-success']
    })
  }
}
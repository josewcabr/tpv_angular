import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Products} from '../models/products';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private subject = new Subject<any>();

  private API_URL = 'http://localhost:8080';

  public products: Products [];

  constructor(private http: HttpClient) { }

  sendEvent(): void{
    this.subject.next();
  }

  getProduct(): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.API_URL}/producto`);
  }
}

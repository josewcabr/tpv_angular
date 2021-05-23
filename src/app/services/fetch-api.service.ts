import { Injectable } from '@angular/core';
import {Products} from '../models/products';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  private subject = new Subject<any>();

  private API_URL = 'localhost:8080/';

  public products: Products [];

  constructor(private http: HttpClient) { }

  sendEvent(): void{
    this.subject.next();
  }

  getProduct(): Observable<Products[]>{
    return this.http.get<Products[]>(`${this.API_URL}/producto`);
  }
}

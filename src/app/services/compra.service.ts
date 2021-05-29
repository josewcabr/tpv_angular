import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';
import {Compra} from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private subject = new Subject<any>();

  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendEvent(): void{
    this.subject.next();
  }

  getCompra(): Observable<Compra[]>{
    return this.http.get<Compra[]>(`${this.API_URL}/compra`);
  }

  postCompra(compra: Compra): Observable<Compra>{
    return this.http.post<Compra>(`${this.API_URL}/compra`, compra);
  }
}

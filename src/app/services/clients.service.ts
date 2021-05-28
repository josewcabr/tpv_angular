import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private subject = new Subject<any>();

  private API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendEvent(): void{
    this.subject.next();
  }

  getProduct(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.API_URL}/cliente`);
  }
}

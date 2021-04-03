import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }
getProducts(): Observable<any> {
 
  let url = 'https://raw.githubusercontent.com/padmanabha/epsilon-final/master/data.json';
  return this.http.get<any>(url);
}
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(public http: Http) { }

  public getProductInfo(itemId): Observable<Response> {
    console.log(itemId);
    var url = '../../assets/item-data.json';
    return this.http.get(url);
  }

}

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions } from '@angular/http';



@Injectable()
export class FakeProductService { 

    constructor() { }

    getProductInfo() {
        return Observable.of();
    }
}
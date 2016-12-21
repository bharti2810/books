import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class HTTPTestService {
    testObj = { id : 10 };
    constructor(private _http: Http) {}
//_http is an object of class Http  
    postJSON(url: string, obj : any) : Observable<Response> {
        let myHeadersObj = new Headers();//new variable/objects in Headers
        myHeadersObj.append('Content-Type', 'application/json');//append(adds) content type as json to headers object
        // let json = JSON.stringify(book);
        // let params = 'json=' + json;
        let options = new RequestOptions({ headers: myHeadersObj });//https://angular.io/docs/ts/latest/api/http/index/RequestOptions-class.html
        return this._http.post('http://zixmbp.local.wisflux.com:3000/api' + url, { obj }, options).map(res => res.json());
    }
}
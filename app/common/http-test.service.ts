import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class HTTPTestService {
    constructor(private _http: Http) {}
    
    postJSON(book : any) : Observable<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // let json = JSON.stringify(book);
        // let params = 'json=' + json;
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://192.168.0.6:3000/api/books',{ book }, options)
        .map(res => res.json());
    }
}
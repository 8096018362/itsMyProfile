
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import 'rxjs/add/operator/map'


@Injectable()

export class appService {

    baseUrl: string = "http://192.168.3.56:5000/";

    constructor(private httpClient: HttpClient) { }

    login(obj) {
        return this.httpClient.post(this.baseUrl + 'auth', obj).map(response => {
            return response
        })
    }
    
    register(obj) {
        return this.httpClient.post(this.baseUrl + 'api/v1/register', obj).map(response => {
            return response
        })
    }


}
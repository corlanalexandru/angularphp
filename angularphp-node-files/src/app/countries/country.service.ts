import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { ICountry } from './ICountry';

@Injectable()
export class CountryService {
    constructor(private _http: HttpClient) { }

    getCountries(): Observable<ICountry[]> {
        return this._http.get<ICountry[]>(
            'http://localhost/angularphp/services/getCountries.php'
        );
    }

    getCountry(code: string): Observable<ICountry> {
        return this._http.get<ICountry>(
            'http://localhost/angularphp/services/getCountry.php?code=' + 
            encodeURIComponent(code)
        );
    }

    addState(name: string, code: string): Observable<boolean> {
        return this._http.post<boolean>(
            'http://localhost/angularphp/services/addState.php',
            new HttpParams()
                .set("name", name)
                .set("code", code)
                .toString(),
            { headers: new HttpHeaders()
                .set("Content-Type", "application/x-www-form-urlencoded")}
        );
    }

}
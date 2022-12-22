import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor(
        private _httpClient: HttpClient) { }

    public post(url: string, data: any): Observable<any> {
        return this._httpClient.post(url, data).pipe(catchError((error) => {
            this.writeLogError(error, 'POST');
            return error;
        }));
    }

    public put(url: string, data: any): Observable<any> {
        return this._httpClient.put(url, data).pipe(catchError((error) => {
            this.writeLogError(error, 'PUT');
            return error;
        }));
    }

    public delete(url: string): Observable<any> {
        return this._httpClient.delete(url).pipe(catchError((error) => {
            this.writeLogError(error, 'DELETE');
            return error;
        }));
    }

    public get(url: string, loading: boolean = true): Observable<any> {
        return this._httpClient.get(url).pipe(catchError((error) => {
            this.writeLogError(error, 'GET');
            return error;
        }));
    }

    private writeLogError(error: any, httpType: string): void {
        let errorMessage: string;

        if (error instanceof Response) {
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }

        console.log(`===== ERROR HANDLER - ${httpType}`);
        console.log(errorMessage);
    }
}

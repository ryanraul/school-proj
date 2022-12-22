import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';

interface AddressWs {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}

@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  
  constructor(
    private apiService: ApiService
  ) 
  { }

  public getAddress(zipCode:string): Observable<AddressWs> {
    return this.apiService
      .get(`//viacep.com.br/ws/${zipCode}/json/`)
      .pipe(
        catchError((error) => throwError(error))
      )
  }

}

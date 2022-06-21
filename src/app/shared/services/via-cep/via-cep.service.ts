import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(
    private http: HttpClient
  ) { }

  public getDataFromCep(cep: number) {
    return this.http.get(`${environment.viaCep}/${cep}/json`)
  }
  
}

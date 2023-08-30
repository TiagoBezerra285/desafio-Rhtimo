import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cadastro } from '../model/cadastro-model';

@Injectable({
  providedIn: 'root'
})
export class CadastroServicesService {
  baseURL = 'https://localhost:44360/api/v1/CadastroCartao';

  constructor(private http: HttpClient) { }

  public getCadastro(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.baseURL);

  }

  public postCadastro(cadastro: Cadastro): Observable<Cadastro> {
    console.log(cadastro)
    return this.http.post<Cadastro>(this.baseURL, cadastro);
  }

  public putCadastro(id: number, cadastro: Cadastro): Observable<Cadastro> {
    return this.http.put<Cadastro>(`${this.baseURL}/${id}`, cadastro);
  }

  public deleteCadastro(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseURL}/${id}`);
  }
}

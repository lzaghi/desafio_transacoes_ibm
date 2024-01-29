import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from './transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private http: HttpClient ) { }

  private url = 'http://localhost:8080';

  public recuperarTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.url + '/transacoes');
  }
}

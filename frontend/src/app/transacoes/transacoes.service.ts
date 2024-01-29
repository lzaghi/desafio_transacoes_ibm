import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria, Transacao } from './transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private http: HttpClient ) { }

  private url = 'http://localhost:8080';

  public recuperarTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.url + '/transacoes');
  }

  public recuperarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url + '/categorias');
  }

  public salvarTransacao(arrayTransacao: Transacao[]): Observable<Transacao[]> {
    return this.http.post<Transacao[]>(this.url + '/transacoes', arrayTransacao);
  }
}

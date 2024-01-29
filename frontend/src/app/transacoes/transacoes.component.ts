import { Component, OnInit, Output } from '@angular/core';
import { TransacoesService } from './transacoes.service';
import { Transacao } from './transacao';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.recuperarTransacoes();
  }
  
  estaCarregando: boolean = true;
  transacoes: Transacao[] = [];

  recuperarTransacoes(): void {
    this.estaCarregando = true;
    this.transacoesService.recuperarTransacoes().subscribe(
      (resposta) => {
        console.log('Resposta:', resposta);
        this.transacoes = resposta;
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      },
      () => {
        this.estaCarregando = false;
      }
    )
  }
}

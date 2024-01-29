import { Component, Input } from '@angular/core';
import { Transacao } from '../transacao';

@Component({
  selector: 'app-tabela-transacoes',
  templateUrl: './tabela-transacoes.component.html',
  styleUrls: ['./tabela-transacoes.component.scss']
})
export class TabelaTransacoesComponent {
  @Input()
  transacoes: Transacao[] = [];
}

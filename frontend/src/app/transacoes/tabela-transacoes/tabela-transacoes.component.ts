import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transacao } from '../transacao';
import { TransacoesService } from '../transacoes.service';

@Component({
  selector: 'app-tabela-transacoes',
  templateUrl: './tabela-transacoes.component.html',
  styleUrls: ['./tabela-transacoes.component.scss']
})
export class TabelaTransacoesComponent {
  constructor(private transacoesService: TransacoesService) { }
  
  @Input()
  transacoes: Transacao[] = [];

  @Output()
  transacaoDeletada: EventEmitter<void> = new EventEmitter<void>();

  deletarTransacao(id?: number|null): void {
    this.transacoesService.deletarTransacao(id!).subscribe(
      (_resposta) => {
        // alert('Transação deletada com sucesso!');
        this.transacaoDeletada.emit();
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      }
    );
  }

  deletarTodasTransacoes(): void {
    this.transacoesService.deletarTodasTransacoes().subscribe(
      (_resposta) => {
        alert('Todas as transações foram deletadas com sucesso!');
        this.transacaoDeletada.emit();
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      }
    )
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria, Transacao } from '../transacao';
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

  @Input()
  categorias: Categoria[] = [];

  @Output()
  alteracaoRegistros: EventEmitter<void> = new EventEmitter<void>();

  calcularSaldo(): number {
    return this.transacoes.reduce((acumulador, transacao) => {
      return acumulador + transacao.valor!;
    }, 0)
  }

  deletarTransacao(id?: number|null): void {
    this.transacoesService.deletarTransacao(id!).subscribe(
      (_resposta) => {
        // alert('Transação deletada com sucesso!');
        this.alteracaoRegistros.emit();
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
        this.alteracaoRegistros.emit();
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      }
    )
  }

  atualizarTransacao(transacao: Transacao): void {
    console.log(transacao);
    console.log(this.categorias)
    this.transacoesService.atualizarTransacao(transacao).subscribe(
      (_resposta) => {
        alert('Transação atualizada com sucesso!');
        this.alteracaoRegistros.emit();
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      }
    )
    transacao.editando = false;
  }
}

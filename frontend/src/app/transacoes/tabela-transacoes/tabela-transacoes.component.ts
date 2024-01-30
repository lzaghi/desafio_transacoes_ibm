import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
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

  todasCategorias: Categoria = {nome: "todas"};
  filtroCategoria: Categoria = this.todasCategorias;

  todasDatas: Date = new Date(0);
  filtroData: Date = this.todasDatas;

  recuperarDatas(): Date[] {
    const datas = new Set<Date>();
    this.transacoes.forEach((t) => datas.add(t.data!));
    return Array.from(datas);
  }

  filtrarTransacoes(transacoes: Transacao[]): Transacao[] | [] {
    return transacoes
              .filter((t) => t.categoria!.nome === this.filtroCategoria?.nome || this.filtroCategoria?.nome === 'todas')
              .filter((t) => t.data === this.filtroData || this.filtroData === this.todasDatas);
  }

  calcularSaldo(transacoes: Transacao[]): number {
    return transacoes.reduce((acumulador, transacao) => {
      return acumulador + transacao.valor!;
    }, 0)
  }

  deletarTransacao(id?: number|null): void {
    this.transacoesService.deletarTransacao(id!).subscribe(
      (_resposta) => {
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

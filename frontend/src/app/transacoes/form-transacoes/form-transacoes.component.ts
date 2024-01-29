import { Component, OnInit } from '@angular/core';
import { TransacoesService } from '../transacoes.service';
import { Categoria, Transacao } from '../transacao';

@Component({
  selector: 'app-form-transacoes',
  templateUrl: './form-transacoes.component.html',
  styleUrls: ['./form-transacoes.component.scss']
})
export class FormTransacoesComponent implements OnInit {
  constructor(private transacoesService: TransacoesService) { }

  estaCarregando: boolean = false;
  estaCarregandoCategorias: boolean = true;

  listaTransacoes: Transacao[] = [];
  transacao: Transacao = new Transacao();

  categorias: Categoria[] = [];

  ngOnInit(): void {
    this.recuperarCategorias();
  }

  recuperarCategorias(): void {
    this.estaCarregandoCategorias = true;
    this.transacoesService.recuperarCategorias().subscribe(
      (resposta) => {
        console.log('Resposta:', resposta);
        console.log(resposta)
        this.categorias = resposta;
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      },
      () => {
        this.estaCarregandoCategorias = false;
      }
    )
  }

  adicionarTransacao() {
    const transacaoSemId = { ...this.transacao };
    delete transacaoSemId.id;

    this.listaTransacoes.push(transacaoSemId);
    this.transacao = new Transacao();
  }

  salvarTransacoes(): void{
    this.estaCarregando = true;
    this.transacoesService.salvarTransacao(this.listaTransacoes).subscribe(
      (_resposta) => {
        this.estaCarregando = false;
        alert('Transações salvas com sucesso!');
        this.listaTransacoes = [];
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      }
    )
  }
}

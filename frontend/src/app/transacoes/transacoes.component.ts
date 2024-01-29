import { Component, OnInit } from '@angular/core';
import { TransacoesService } from './transacoes.service';
import { Categoria, Transacao } from './transacao';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.recuperarCategorias();
    this.recuperarTransacoes();
  }
  
  estaCarregando: boolean = true;
  transacoes: Transacao[] = [];
  categorias: Categoria[] = [];

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

  recuperarCategorias(): void {
    this.transacoesService.recuperarCategorias().subscribe(
      (resposta) => {
        console.log('Respostaaa:', resposta);
        this.categorias = resposta;
        console.log(this.categorias)
      },
      (error) => {
        console.log('Aconteceu um erro:', error);
      }
    )
  }

  onAlteracaoRegistros(): void {
    this.recuperarTransacoes();
  }
}

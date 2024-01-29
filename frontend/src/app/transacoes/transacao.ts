export class Categoria {
  id: number;
  nome: string;

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }
}

export class Transacao {
  id: number;
  data: Date;
  valor: number;
  categoria: Categoria
  
  constructor(id: number, data: Date, valor: number, categoria: Categoria) {
    this.id = id;
    this.data = data;
    this.valor = valor;
    this.categoria = categoria;
  }
}
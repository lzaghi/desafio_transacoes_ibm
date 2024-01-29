export class Categoria {
  id?: number|null;
  nome?: string|null;

  constructor(id?: number|null, nome?: string|null) {
    this.id = id;
    this.nome = nome;
  }
}

export class Transacao {
  id?: number|null;
  data?: Date|null;
  valor?: number|null;
  categoria?: Categoria|null;
  editando?: boolean = false;
  
  constructor(id?: number|null, data?: Date|null, valor?: number|null, categoria?: Categoria|null) {
    this.id = id;
    this.data = data;
    this.valor = valor;
    this.categoria = categoria;
  }
}
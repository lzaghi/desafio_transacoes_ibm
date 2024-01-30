# Desafio IBM - Transações Financeiras

Essa é uma implementação de uma aplicação fullstack, com uso de Angular, Java com SpringBoot, e banco de dados MySQL. </br>É um aplicativo de controle de transações financeiras, no qual é possível recuperar, inserir, atualizar e deletar transações.

<!-- A API foi construída com a arquitetura service-controller e a aplicação foi Dockerizada.</br>

O foco dessa projeto foi praticar a construção de uma aplicação fullstack completa robusta, construindo e integrando front e back-end. -->

<!-- [Experimente!](https://react-sql-delivery-app-front.vercel.app) -->


## Funcionalidades
- Consulta das informações das transações registradas (categoria, valor e data)
- Filtro de consulta por categoria e por data
- Consulta de saldo total e saldo parcial (por categoria e/ou data)
- Atualização de transações registradas
- Consulta e criação de categorias
- Inserção de novas transações, individualmente ou por lote
- Deleção de uma transação
- Limpar o registro de transações


## Instalação e execução local

Para rodar esta aplicação é necessário ter o Docker e o Docker Compose (v1.29 ou superior) instalados em sua máquina.

1. Clone o repositório e entre no diretório
```bash
  git clone git@github.com:lzaghi/react-sql-delivery-app.git
  cd react-sql-delivery-app
```

2. A partir da raiz do projeto, acesse /back-end e instale as dependências 
```bash
  cd back-end
  npm install
```

3. A partir da raiz do projeto, acesse /front-end e instale as dependências 
```bash
  cd front-end
  npm install
```

4. A partir da raiz do projeto, suba os containeres do front, back e banco de dados
```bash
  npm run compose:up
```

A aplicação já estará rodando! :)</br>
Acesse ```http://localhost:4200``` para a experiência de usuário. O back-end estará rodando em ```http://localhost:8080```.


## Documentação

A documentação completa da API, com todas as operações possíveis, pode ser consultada localmente em ```http://localhost:8080/swagger-ui.html``` após a aplicação estar rodando.
![](swagger.png)


## Demonstração

![](demonstracao.mp4)



## Tecnologias utilizadas

Angular v15 (Node.js), SpringBoot (Java v17), MySQL, Docker.


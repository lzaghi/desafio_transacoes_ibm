package br.com.backend.controllers;

import br.com.backend.entities.TransacaoEntity;
import br.com.backend.services.TransacaoService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("transacoes")
@CrossOrigin(origins = "http://localhost:4200")
public class TransacaoController {
    @Autowired
    private TransacaoService transacaoService;

    @GetMapping
    @Operation(summary = "Recuperar todas as transações", description = "Endpoint para listar o registro completo das transações")
    public List<TransacaoEntity> buscarTodasTransacoes() {
        return transacaoService.buscarTodasTransacoes();
    }

    @PostMapping
    @Operation(summary = "Inserir transações, individualmente ou por lote", description = "Enpoint para criar novas transações. Necessário passar um array com uma ou mais transação, sendo que nenhuma delas pode ter o campo id, e devem passar um id de categoria válido (a relação com categoria é feita por id, o valor do campo 'nome' passado é indiferente)")
    public ResponseEntity<Object> adicionarTransacao(@RequestBody List<TransacaoEntity> arrayTransacao) {
        boolean anyMatch = arrayTransacao.stream().anyMatch(t -> t.getId() != null);
        if (anyMatch) {
            return ResponseEntity.status(400).body("Requisição não deve conter ids");
        } else {
            List<TransacaoEntity> novasTransacoes = transacaoService.adicionarTransacao(arrayTransacao);
            return ResponseEntity.status(201).body(novasTransacoes);
        }
    }

    @PutMapping
    @Operation(summary = "Atualizar transação por id", description = "Endpoint para alterar uma transação. Necessário passar o campo id, assim como um id de categoria válido (a relação com categoria é feita por id, o valor do campo 'nome' passado é indiferente)")
    public ResponseEntity<Object> atualizarTransacao(@RequestBody TransacaoEntity transacao) {
        if (transacao.getId() == null) {
            return ResponseEntity.status(400).body("Id é obrigatório");
        } else {
            TransacaoEntity novaTransacao = transacaoService.atualizarTransacao(transacao);
            return ResponseEntity.status(200).body(novaTransacao);
        }
    }

    @DeleteMapping
    @Operation(summary = "Deletar transação por id", description = "Endpoint para remover uma transação dos registros. Necessário passar um id via query")
    public ResponseEntity deletarTransacaoPorId (@PathParam("id") Integer id) {
        transacaoService.deletarTransacaoPorId(id);
        return ResponseEntity.status(204).build();
    }

    @DeleteMapping("/todas")
    @Operation(summary = "Deletar todas as transações", description = "Endpoint para apagar todas as transações registradas")
    public ResponseEntity deletarTodasTransacoes () {
        transacaoService.deletarTodasTransacoes();
        return ResponseEntity.status(204).build();
    }
}

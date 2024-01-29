package br.com.backend.controllers;

import br.com.backend.entities.TransacaoEntity;
import br.com.backend.services.TransacaoService;
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
    public List<TransacaoEntity> buscarTodasTransacoes() {
        return transacaoService.buscarTodasTransacoes();
    }

    @PostMapping
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
    public ResponseEntity<Object> atualizarTransacao(@RequestBody TransacaoEntity transacao) {
        if (transacao.getId() == null) {
            return ResponseEntity.status(400).body("Id é obrigatório");
        } else {
            TransacaoEntity novaTransacao = transacaoService.atualizarTransacao(transacao);
            return ResponseEntity.status(200).body(novaTransacao);
        }
    }

    @DeleteMapping
    public ResponseEntity deletarTransacaoPorId (@PathParam("id") Integer id) {
        transacaoService.deletarTransacaoPorId(id);
        return ResponseEntity.status(204).build();
    }

    @DeleteMapping("/todas")
    public ResponseEntity deletarTodasTransacoes () {
        transacaoService.deletarTodasTransacoes();
        return ResponseEntity.status(204).build();
    }
}

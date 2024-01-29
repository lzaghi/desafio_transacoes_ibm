package br.com.backend.controllers;

import br.com.backend.entities.TransacaoEntity;
import br.com.backend.services.TransacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("transacoes")
public class TransacaoController {
    @Autowired
    private TransacaoService transacaoService;

    @GetMapping
    public List<TransacaoEntity> buscarTodasTransacoes() {
        return transacaoService.buscarTodasTransacoes();
    }

    @PostMapping
    public ResponseEntity<List<TransacaoEntity>> adicionarTransacao(@RequestBody List<TransacaoEntity> arrayTransacao) {
        List<TransacaoEntity> novasTransacoes = transacaoService.adicionarTransacao(arrayTransacao);
        return ResponseEntity.status(201).body(novasTransacoes);
    }
}

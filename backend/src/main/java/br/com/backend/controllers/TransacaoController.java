package br.com.backend.controllers;

import br.com.backend.entities.TransacaoEntity;
import br.com.backend.services.TransacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

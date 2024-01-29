package br.com.backend.controllers;

import br.com.backend.entities.CategoriaEntity;
import br.com.backend.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("categorias")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public List<CategoriaEntity> buscarTodasCategorias() {
        return categoriaService.buscarTodasCategorias();
    }
}

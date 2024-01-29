package br.com.backend.controllers;

import br.com.backend.entities.CategoriaEntity;
import br.com.backend.services.CategoriaService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categorias")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public ResponseEntity<List<CategoriaEntity>> buscarTodasCategorias() {
        List<CategoriaEntity> categorias = categoriaService.buscarTodasCategorias();
        return ResponseEntity.status(200).body(categorias);
    }

    @PostMapping
    public ResponseEntity<CategoriaEntity> adicionarCategoria(@RequestBody CategoriaEntity categoria) {
        CategoriaEntity novaCategoria = categoriaService.adicionarCategoria(categoria);
        return ResponseEntity.status(201).body(novaCategoria);
    }

    @DeleteMapping
    public ResponseEntity deletarCategoria(@PathParam("id") Integer id) {
        categoriaService.deletarCategoria(id);
        return ResponseEntity.status(204).build();
    }
}

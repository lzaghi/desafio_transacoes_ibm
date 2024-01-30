package br.com.backend.controllers;

import br.com.backend.entities.CategoriaEntity;
import br.com.backend.services.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categorias")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    @Operation(summary = "Recuperar todas as categorias", description = "Endpoint para listar o registro completo das categorias")
    public ResponseEntity<List<CategoriaEntity>> buscarTodasCategorias() {
        List<CategoriaEntity> categorias = categoriaService.buscarTodasCategorias();
        return ResponseEntity.status(200).body(categorias);
    }

    @PostMapping
    @Operation(summary = "Criar uma nova categoria", description = "Endpoint para inserir uma categoria na lista. Necessário passar uma string de nome, o id é gerado automaticamente. Caso seja passado um id já existente, atualiza a respectiva categoria")
    public ResponseEntity<CategoriaEntity> adicionarCategoria(@RequestBody CategoriaEntity categoria) {
        CategoriaEntity novaCategoria = categoriaService.adicionarCategoria(categoria);
        return ResponseEntity.status(201).body(novaCategoria);
    }

    @DeleteMapping
    @Operation(summary = "Deletar categoria por id", description = "Endpoint para remover uma categoria da lista. Necessário passar um id via query")
    public ResponseEntity deletarCategoria(@PathParam("id") Integer id) {
        categoriaService.deletarCategoria(id);
        return ResponseEntity.status(204).build();
    }
}

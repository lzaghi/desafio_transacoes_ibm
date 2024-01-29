package br.com.backend.services;

import br.com.backend.entities.CategoriaEntity;
import br.com.backend.repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<CategoriaEntity> buscarTodasCategorias() {
        return categoriaRepository.findAll();
    }

    public CategoriaEntity adicionarCategoria(CategoriaEntity categoria) {
        return categoriaRepository.save(categoria);
    }

    public void deletarCategoria(Integer id) {
        categoriaRepository.deleteById(id);
    }
}

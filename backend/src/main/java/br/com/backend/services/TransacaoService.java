package br.com.backend.services;

import br.com.backend.entities.TransacaoEntity;
import br.com.backend.repositories.TransacaoRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransacaoService {
    @Autowired
    private TransacaoRepository transacaoRepository;

    public List<TransacaoEntity> buscarTodasTransacoes() {
        Sort sortByData = Sort.by(Sort.Direction.DESC, "data");
        return transacaoRepository.findAll(sortByData);
    }

    public List<TransacaoEntity> adicionarTransacao(List<TransacaoEntity> arrayTransacao) {
        return transacaoRepository.saveAll(arrayTransacao);
    }

    public TransacaoEntity atualizarTransacao(TransacaoEntity transacao) {
        return transacaoRepository.save(transacao);
    }

    public void deletarTransacaoPorId(Integer id) {
        transacaoRepository.deleteById(id);
    }

    public void deletarTodasTransacoes() {
        transacaoRepository.deleteAll();
    }
}

package br.com.backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity(name = "transacoes")
public class TransacaoEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "data")
    private LocalDate data;

    @Column(name = "valor")
    private double valor;

    @ManyToOne
    @JoinColumn
    private CategoriaEntity categoria;
}

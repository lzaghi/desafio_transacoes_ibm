CREATE DATABASE IF NOT EXISTS transacoes_ibm;
USE transacoes_ibm;

DROP TABLE IF EXISTS `transacoes`;

DROP TABLE IF EXISTS `categorias`;

CREATE TABLE `categorias` (
    `id` INT NOT NULL AUTO_INCREMENT, `categoria` VARCHAR(45) NOT NULL, PRIMARY KEY (`id`)
);

INSERT INTO
    categorias (categoria)
VALUES ('alimentacao'),
    ('transporte'),
    ('compras'),
    ('entretenimento'),
    ('saude'),
    ('outros');

CREATE TABLE `transacoes` (
    `id` INT NOT NULL AUTO_INCREMENT, `data` DATE NOT NULL, `valor` DECIMAL(10, 2) NOT NULL, `categoria_id` INT NOT NULL, PRIMARY KEY (`id`), KEY `fk_transacoes_categorias_idx` (`categoria_id`), CONSTRAINT `fk_transacoes_categorias` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
);

INSERT INTO
    transacoes (data, valor, categoria_id)
VALUES ('2023-02-15', 80.00, 1),
    ('2023-02-16', -30.50, 2),
    ('2023-02-17', 120.75, 3),
    ('2023-02-15', -20.00, 4),
    ('2023-02-16', 45.60, 5),
    ('2023-02-17', -15.25, 1),
    ('2023-02-15', 90.00, 2),
    ('2023-02-16', -50.20, 3),
    ('2023-02-17', 15.30, 4),
    ('2023-02-15', -10.50, 5);
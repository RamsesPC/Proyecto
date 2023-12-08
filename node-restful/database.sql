CREATE DATABASE IF NOT EXISTS proyecto;

USE proyecto;

CREATE TABLE usuario (
    id_usuario    INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre      VARCHAR(128)    NOT NULL,
    apellidos   VARCHAR(255)    NOT NULL,
    correo_electronico   VARCHAR(255)    NOT NULL,
    pass   VARCHAR(255)    NOT NULL,
    tipo_user  VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE artista (
    id_artista    INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)        NOT NULL,
    biografia   VARCHAR(255)    NOT NULL,
    obras   VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_artista)
);

CREATE TABLE comprador (
    id_comprador    INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)        NOT NULL,
    biografia   VARCHAR(255)    NOT NULL,
    obras   VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_artista)
);

CREATE TABLE obra (
    id_obra        INTEGER             NOT NULL    AUTO_INCREMENT,
    titulo          VARCHAR(255)        NOT NULL,
    descripcion         VARCHAR(32)         NOT NULL,
    precio MONEY  NOT NULL,
    imagen   BLOB   NOT NULL,
    fecha_creacion   DATETIME    NOT NULL,
    estado   BINARY    NOT NULL,
    fk_id_artista     INTEGER             NOT NULL,
    PRIMARY KEY     (id_libro),
    FOREIGN KEY     (fk_id_artista)       REFERENCES autores(id_autor),
    
);

CREATE TABLE transaccion (
    id_transaccion        INTEGER             NOT NULL    AUTO_INCREMENT,
    fecha   DATETIME    NOT NULL,
    metodo_pago   VARCHAR(255)    NOT NULL,
    fk_id_artista     INTEGER             NOT NULL,
    fk_id_comprador     INTEGER             NOT NULL,
    fk_id_obra     INTEGER             NOT NULL,
    PRIMARY KEY     (id_transaccion),
    FOREIGN KEY     (fk_id_artista)       REFERENCES autores(id_autor),
    FOREIGN KEY     (fk_id_comprador)       REFERENCES comprador(id_comprador),
    FOREIGN KEY     (fk_id_obra)       REFERENCES obras(id_obra),
    
);

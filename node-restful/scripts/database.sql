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
    PRIMARY KEY     (id_comprador)
);

CREATE TABLE obra (
    id_obra          INTEGER             NOT NULL AUTO_INCREMENT,
    titulo           VARCHAR(255)        NOT NULL,
    descripcion      VARCHAR(32)         NOT NULL,
    precio           DECIMAL(10,2)       NOT NULL,
    imagen           BLOB                NOT NULL,
    fecha_creacion   DATETIME            NOT NULL,
    estado           BINARY              NOT NULL,
    fk_id_artista    INTEGER             NOT NULL,
    PRIMARY KEY      (id_obra),
    FOREIGN KEY      (fk_id_artista)     REFERENCES artista(id_artista)
);


CREATE TABLE transaccion (
    id_transaccion   INTEGER             NOT NULL AUTO_INCREMENT,
    fecha            DATETIME            NOT NULL,
    metodo_pago      VARCHAR(255)        NOT NULL,
    fk_id_artista    INTEGER             NOT NULL,
    fk_id_comprador  INTEGER             NOT NULL,
    fk_id_obra       INTEGER             NOT NULL,
    PRIMARY KEY      (id_transaccion),
    FOREIGN KEY      (fk_id_artista)     REFERENCES artista(id_artista),
    FOREIGN KEY      (fk_id_comprador)   REFERENCES comprador(id_comprador),
    FOREIGN KEY      (fk_id_obra)        REFERENCES obra(id_obra)
);


-- Insertar usuarios
INSERT INTO usuario (nombre, apellidos, correo_electronico, pass, tipo_user) 
VALUES ('Juan', 'Pérez', 'juan.perez@example.com', 'contrasena123', 'comprador');

-- Insertar artistas
INSERT INTO artista (nombre, biografia, obras) 
VALUES ('Pablo Picasso', 'Famoso pintor español', 'Guernica, La Noche Estrellada');

-- Insertar compradores
INSERT INTO comprador (nombre, biografia, obras) 
VALUES ('Ana López', 'Amante del arte', 'La Gioconda, El Grito');

-- Insertar obras
INSERT INTO obra (titulo, descripcion, precio, imagen, fecha_creacion, estado, fk_id_artista) 
VALUES ('La Noche Estrellada', 'Pintura impresionista', 500.00, 'URL de la imagen', NOW(), 1, 1);

-- Insertar transacciones
INSERT INTO transaccion (fecha, metodo_pago, fk_id_artista, fk_id_comprador, fk_id_obra) 
VALUES (NOW(), 'Tarjeta de crédito', 1, 1, 1);

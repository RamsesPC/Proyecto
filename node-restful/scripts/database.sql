CREATE DATABASE IF NOT EXISTS proyecto;

USE proyecto;

CREATE TABLE usuario (
    id_usuario           INTEGER         NOT NULL AUTO_INCREMENT,
    nombre               VARCHAR(128)    NOT NULL,
    apellidos            VARCHAR(255)    NOT NULL,
    correo_electronico   VARCHAR(255)    NOT NULL,
    pass                 VARCHAR(255)    NOT NULL,
    tipo_user            VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE artista (
    id_artista           INTEGER         NOT NULL AUTO_INCREMENT,
    nombre               VARCHAR(255)    NOT NULL,
    curriculum           BLOB,                       -- Archivo del currículum vitae
    declaracion          TEXT,                       -- Declaración del artista
    foto                 BLOB,                       -- Fotografía del artista
    razon_social         VARCHAR(255),               -- Razón social
    rfc                  VARCHAR(255),               -- RFC del artista
    domicilio            VARCHAR(255),               -- Domicilio del artista
    estado               VARCHAR(255),               -- Estado donde reside el artista
    ciudad               VARCHAR(255),               -- Ciudad donde reside el artista
    cp                   VARCHAR(10),                -- Código Postal
    celular              VARCHAR(20),                -- Número de celular
    correo               VARCHAR(255),               -- Correo electrónico
    ine                  BLOB,                       -- Archivo INE
    cuenta_bancaria      VARCHAR(255),               -- Número de cuenta bancaria
    beneficiario_nombre  VARCHAR(255),               -- Nombre del beneficiario
    beneficiario_telefono VARCHAR(20),               -- Teléfono del beneficiario
    beneficiario_correo  VARCHAR(255),               -- Correo electrónico del beneficiario
    PRIMARY KEY (id_artista)
);

CREATE TABLE comprador (
    id_comprador           INTEGER         NOT NULL AUTO_INCREMENT,
    nombre                 VARCHAR(255)    NOT NULL,
    correo                 VARCHAR(255)    NOT NULL,
    password               VARCHAR(255)    NOT NULL,
    fecha_nacimiento       DATE           NOT NULL,
    celular                VARCHAR(20),
    domicilio              VARCHAR(255),
    estado                 VARCHAR(255),
    ciudad                 VARCHAR(255),
    cp                     VARCHAR(10),
    metodo_pago            VARCHAR(255),
    direccion_facturacion  VARCHAR(255),
    PRIMARY KEY (id_comprador)
);

CREATE TABLE obra (
    id_obra              INTEGER         NOT NULL AUTO_INCREMENT,
    titulo               VARCHAR(255)    NOT NULL,
    descripcion          TEXT            NOT NULL,
    categoria            VARCHAR(255),               -- Nueva columna para categoría
    precio               DECIMAL(10,2)   NOT NULL,
    ano_creacion         VARCHAR(4),                 -- Año de creación de la obra
    dimensiones          VARCHAR(255),               -- Dimensiones de la obra
    tecnica              VARCHAR(255),               -- Técnica de la obra
    foto_obra            BLOB,                       -- Fotografía de la obra
    certificado          BLOB,                       -- Certificado de autenticidad
    estado               VARCHAR(255)    NOT NULL,
    fk_id_artista        INTEGER         NOT NULL,
    PRIMARY KEY (id_obra),
    FOREIGN KEY (fk_id_artista) REFERENCES artista(id_artista)
);

CREATE TABLE transaccion (
    id_transaccion       INTEGER         NOT NULL AUTO_INCREMENT,
    fecha                DATETIME        NOT NULL,
    metodo_pago          VARCHAR(255)    NOT NULL,
    fk_id_artista        INTEGER         NOT NULL,
    fk_id_comprador      INTEGER         NOT NULL,
    fk_id_obra           INTEGER         NOT NULL,
    PRIMARY KEY (id_transaccion),
    FOREIGN KEY (fk_id_artista) REFERENCES artista(id_artista),
    FOREIGN KEY (fk_id_comprador) REFERENCES comprador(id_comprador),
    FOREIGN KEY (fk_id_obra) REFERENCES obra(id_obra)
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

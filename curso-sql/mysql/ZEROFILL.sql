-- Especificar que el atributo ZEROFILL se aplica a campos numéricos
USE primera;

-- Crear tabla documentos con la columna código autoincremental y con relleno de ceros
CREATE TABLE documentos (
    titulo VARCHAR(30) NOT NULL,
    codigo INT(5) ZEROFILL AUTO_INCREMENT, -- El (5) define el ancho visual del relleno
    autor VARCHAR(30),
    PRIMARY KEY (codigo)
);

-- Insertar registros para observar el efecto de ZEROFILL
INSERT INTO documentos (titulo, autor)
VALUES
    ('PRIMER', 'JOSE'),
    ('SEGUNDO', 'JUAN'),
    ('TERCERO', 'PEDRO');

-- Consultar la tabla
SELECT * FROM documentos;
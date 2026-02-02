-- Seleccionar la base de datos
USE primera;

-- Crear tabla producto con incremento inicial en 100
CREATE TABLE producto (
    codigo INT AUTO_INCREMENT,
    descripcion VARCHAR(100),
    PRIMARY KEY (codigo)
) AUTO_INCREMENT = 100;

-- Insertar registros dejando que el sistema asigne el código automático
-- (Se usa NULL en la columna autoincremental para que SQL genere el número)
INSERT INTO producto 
VALUES 
    (NULL, 'test'),
    (NULL, 'test_1'),
    (NULL, 'test_3');

-- Consultar todos los registros para verificar el inicio en 100
SELECT * FROM producto;
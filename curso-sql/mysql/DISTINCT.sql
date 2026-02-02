-- Consultar todos los documentos actuales
SELECT * FROM documentos;

-- Insertar nuevos registros dejando que el sistema asigne el código (ZEROFILL/AUTO_INCREMENT)
INSERT INTO documentos (titulo, codigo, autor)
VALUES
    ('CUARTO', NULL, 'JUAN'),
    ('QUINTO', NULL, 'PEDRO');

-- Muestra los nombres de los autores eliminando duplicados
SELECT DISTINCT autor FROM documentos;

-- Cuenta cuántos autores únicos existen en la tabla
SELECT COUNT(DISTINCT autor) FROM documentos;
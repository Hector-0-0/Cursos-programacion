-- TRUNCATE: Borra todo y reinicia el contador AUTO_INCREMENT a su valor original
TRUNCATE TABLE producto;

-- Insertar datos después del Truncate (empezará desde el inicio definido en la tabla)
INSERT INTO producto (codigo, descripcion)
VALUES
    (NULL, 'test1'),
    (NULL, 'test2');

-- Consultar para ver el reinicio del contador
SELECT * FROM producto;

-- DELETE: Borra los registros pero MANTIENE el contador donde se quedó
DELETE FROM producto;
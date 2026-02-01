-- Seleccionar la base de datos
USE primera;

-- Mostrar las columnas de la tabla persona
SHOW COLUMNS FROM persona;

-- Consultar todos los registros
SELECT * FROM persona;

-- Eliminar registros donde el nombre sea 'Leo'
DELETE FROM persona WHERE nombre = 'Leo';

-- Eliminar todos los registros de la tabla
DELETE FROM persona;
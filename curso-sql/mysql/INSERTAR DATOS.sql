-- Seleccionar la base de datos
USE primera;

-- Insertar datos en la tabla persona
INSERT INTO persona (nombre, apellido, dni, nacimiento)
VALUES ('Jerry', 'Flores', '123456', '1990-09-02');

-- Mostrar todos los datos de la tabla
-- El asterisco (*) selecciona todas las columnas
SELECT * FROM persona;
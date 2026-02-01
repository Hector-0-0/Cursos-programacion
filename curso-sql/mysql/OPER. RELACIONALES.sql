-- Seleccionar la base de datos
USE primera;

-- Insertar múltiples registros en la tabla persona
INSERT INTO persona (nombre, apellido, dni, nacimiento)
VALUES
    ('Xavi', 'Mandela', '12345631', '1990-08-12'),
    ('Leo', 'Messi', '12345641', '1990-01-05'),
    ('Cristiano', 'Casado', '12345651', '1990-06-08'),
    ('Juan', 'Casado', '12345661', '1990-05-02');

/*
Operadores relacionales en SQL:
=   Igual
<>  Distinto (también se puede usar !=)
>   Mayor que
<   Menor que
>=  Mayor o igual que
<=  Menor o igual que
*/

-- Seleccionar columnas específicas con filtro
-- WHERE filtra los registros que cumplen la condición
SELECT nombre, apellido, dni 
FROM persona 
WHERE nombre = 'Xavi';
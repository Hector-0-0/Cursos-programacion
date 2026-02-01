-- Seleccionar la base de datos a utilizar
USE primera;

/*
Crear tabla persona con sus atributos.
Cada columna tiene un tipo de dato y opcionalmente una longitud.
*/
CREATE TABLE persona (
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    dni CHAR(8) NOT NULL,  -- No puede quedar vacío (obligatorio)
    nacimiento DATE,
    PRIMARY KEY (dni)
);

-- Mostrar todas las tablas de la base de datos
SHOW TABLES;
-- Seleccionar la base de datos segunda
USE SEGUNDA;

-- Modificar el nombre de la tabla de usuario a individuo
ALTER TABLE USUARIO RENAME INDIVIDUO;

-- Eliminar la columna nombre de la tabla individuo
ALTER TABLE INDIVIDUO DROP COLUMN NOMBRE;

-- Insertar una nueva columna nombre a una tabla ya existente
ALTER TABLE INDIVIDUO ADD NOMBRE VARCHAR(15);

-- Insertar columna alias situada después de la columna apellido
ALTER TABLE INDIVIDUO ADD ALIAS VARCHAR(6) AFTER APELLIDO;

-- Insertar una columna al inicio de la tabla
ALTER TABLE INDIVIDUO ADD TEST VARCHAR(6) FIRST;

-- Cambiar nombre y tipo de dato de una columna (Test a Prueba)
ALTER TABLE INDIVIDUO CHANGE TEST PRUEBA VARCHAR(15);

-- Eliminar clave foránea (Nota: Se debe usar el nombre del constraint, no de la columna)
-- Si el error persiste, verifica el nombre en la pestaña 'Foreign Keys' de Workbench
ALTER TABLE PERSONA DROP FOREIGN KEY persona_ibfk_1;

-- Mostrar la estructura de la tabla persona
DESCRIBE PERSONA;

-- Eliminar la clave primaria de la tabla individuo
ALTER TABLE INDIVIDUO DROP PRIMARY KEY;

-- Mostrar la estructura de la tabla individuo
DESCRIBE INDIVIDUO;
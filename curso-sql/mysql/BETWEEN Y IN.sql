/* BETWEEN = RANGO // IN = DATOS PRECISOS
OPERADORES LOGICOS = AND / OR / NOT
*/

-- Consultar registros con número de usuario entre 2 y 3
SELECT * FROM segunda.usuario
WHERE n_usuario BETWEEN 2 AND 3;

-- Consultar registros que no tienen número de usuario 1 ni 3
SELECT * FROM segunda.usuario
WHERE n_usuario NOT IN (1, 3);

-- Consultar registros fuera del rango 1-2 o con nombre Ariana
SELECT * FROM segunda.usuario
WHERE n_usuario NOT BETWEEN 1 AND 2 OR nombre = 'Ariana';
/*
    ASC  = ORDENA LOS DATOS ASCENDENTE 
    DESC = ORDENA LOS DATOS DESCENDENTE
*/

-- Ordenar registros de manera descendente filtrando por nombres específicos
SELECT * FROM segunda.usuario
WHERE nombre = 'Cristiano' OR nombre = 'Ariana'
ORDER BY n_usuario DESC;
-- Consultar todos los registros de la tabla usuario
SELECT * FROM segunda.usuario;

-- Filtrar grupos por una suma de n_usuario superior a 10
SELECT nombre, SUM(n_usuario) FROM segunda.usuario
GROUP BY nombre
HAVING SUM(n_usuario) > 10;

/*
    DIFERENCIA ENTRE WHERE Y HAVING
    
        WHERE  = Filtra filas ANTES de agrupar.
        HAVING = Filtra grupos DESPUÉS de agrupar.
*/
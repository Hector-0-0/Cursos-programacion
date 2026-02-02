-- Consultar todos los registros de la tabla usuario
SELECT * FROM segunda.usuario;

-- Agrupar por nombre y obtener la suma de la columna n_usuario
SELECT nombre, SUM(n_usuario) FROM segunda.usuario
GROUP BY nombre;

-- Agrupar por nombre filtrando a los que no tienen apellido Flores
SELECT nombre, SUM(n_usuario) FROM segunda.usuario
WHERE apellido <> 'Flores'
GROUP BY nombre;
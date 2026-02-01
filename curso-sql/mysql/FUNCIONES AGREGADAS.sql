-- Mostrar todos los registros de la tabla usuario
SELECT * FROM segunda.usuario;

/*
    FUNCIONES AGREGADAS
    
        SUM = SUMAR
        MIN = SELECCIONA MINIMO
        MAX = SELECCIONA MAXIMO
        COUNT = CUENTA VALORES
*/

-- Sumar los números de usuario de la tabla usuario
SELECT SUM(n_usuario) FROM segunda.usuario;

-- Contar nombres que comienzan con J
SELECT COUNT(nombre) FROM segunda.usuario WHERE nombre LIKE 'J%';

-- Obtener el valor máximo de n_usuario
SELECT MAX(n_usuario) FROM segunda.usuario;

-- Obtener el valor mínimo de n_usuario
SELECT MIN(n_usuario) FROM segunda.usuario;
/*
    LIKE
    
(%) = En ese espacio puede ir cualquier cadena de caracteres
(_) = En ese espacio puede ir cualquier caracter individual
*/

-- Seleccionar nombres que comiencen con J seguido de cualquier cadena
SELECT * FROM segunda.usuario
WHERE nombre LIKE 'J%';

-- Seleccionar nombres que tengan un carácter individual seguido de una A
SELECT * FROM segunda.usuario
WHERE nombre LIKE '_a';
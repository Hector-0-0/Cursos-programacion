/*
    OPERADOR REGEXP (Regular Expressions)
    Sirve para realizar búsquedas de patrones complejos.
*/

USE primera;

-- 1. Buscar registros que CONTENGAN una palabra en cualquier parte
SELECT * FROM documentos WHERE titulo REGEXP 'primer';

-- 2. El símbolo ^ busca al INICIO del texto
SELECT * FROM documentos WHERE titulo REGEXP '^seg';

-- 3. El símbolo $ busca al FINAL del texto
SELECT * FROM documentos WHERE titulo REGEXP 'do$';

-- 4. El punto (.) funciona como comodín para UN solo carácter
SELECT * FROM documentos WHERE titulo REGEXP 't.rcero';

-- 5. Los corchetes [] buscan cualquier carácter dentro de la lista
-- (Busca registros que tengan la letra a, e o i)
SELECT * FROM documentos WHERE autor REGEXP '[aei]';

-- 6. El guion [-] define un rango
-- (Busca si el título contiene algún número del 0 al 9)
SELECT * FROM documentos WHERE titulo REGEXP '[0-9]';

-- 7. La barra vertical | funciona como un "OR" lógico
SELECT * FROM documentos WHERE autor REGEXP 'jose|juan|pedro';
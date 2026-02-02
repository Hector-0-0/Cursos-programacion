-- Seleccionar la base de datos
USE primera;

-- Crear tabla de salarios
CREATE TABLE salarios(
    empleado VARCHAR(50) NOT NULL,
    salario INT,
    ventas INT,
    PRIMARY KEY(empleado)
);

-- Insertar datos de prueba
INSERT INTO salarios (empleado, salario, ventas)
VALUES
    ('Juan', 1000, 1),
    ('Pedro', 2000, 2),
    ('Jose', 1500, 5);

-- Consultar con una columna calculada
-- Usamos 'AS' para darle un nombre legible a la nueva columna
SELECT empleado, salario, salario + (500 * ventas) AS salario_total
FROM salarios;
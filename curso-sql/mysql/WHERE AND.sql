-- Seleccionar registros con filtrado por DNI y nombre
SELECT * FROM primera.persona 
WHERE dni < 1234566 AND nombre <> 'Jerry';
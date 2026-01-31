/*
ARCHIVO: putDeletePatch.js
TEMA: Métodos de Actualización (PUT, PATCH) y Eliminación (DELETE)
En este ejemplo se exploran:
- PUT: Sustitución completa de un recurso existente.
- PATCH: Modificación parcial de un recurso (solo los campos enviados).
- DELETE: Eliminación de un recurso del servidor.
- Manejo de cabeceras (headers) para el envío de JSON.
- Procesamiento de respuestas exitosas con cuerpos vacíos o modificados.
*/

// 1. MÉTODO PUT (Sustitución total)
// Se envía el objeto completo. Lo que no se envíe, se pierde o se sobreescribe.
fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "PUT",
    body: JSON.stringify({
        id: 5,
        title: "Nuevo Título",
        body: "Cuerpo totalmente actualizado",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log("Respuesta PUT (Total):", data))
.catch(error => console.error("Error en PUT:", error));


// 2. MÉTODO PATCH (Modificación parcial)
// Solo enviamos el campo que queremos cambiar (en este caso, el título).
fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "PATCH",
    body: JSON.stringify({
        title: "Título editado con PATCH"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log("Respuesta PATCH (Parcial):", data))
.catch(error => console.error("Error en PATCH:", error));


// 3. MÉTODO DELETE (Eliminación)
// No requiere 'body' ni 'headers' de contenido, solo el ID en la URL.


fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method: "DELETE"
})
.then(respuesta => {
    if(respuesta.ok) {
        console.log("Estado HTTP: 200/204 - Eliminado correctamente");
    }
    // Retornamos el json para ver el objeto vacío que devuelve JSONPlaceholder
    return respuesta.json();
})
.then(data => {
    // Mostramos el registro vacío {}
    console.log("Cuerpo de respuesta DELETE:", data);
})
.catch(error => console.error("Error en DELETE:", error));

/*
RESUMEN DE VERBOS HTTP:
- PUT: "Reemplaza este archivo por este otro nuevo".
- PATCH: "Cambia solo esta línea de este archivo".
- DELETE: "Borra este archivo".
*/
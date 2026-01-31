/*
ARCHIVO: fetchAvanzado.js
TEMA: Dominio Total de Fetch API (Autenticación y Configuración)
En este ejemplo se exploran:
- Métodos de Autenticación: Basic Auth (Base64) y Bearer Token (JWT).
- Atributos de Configuración: method, headers, body, credentials, cache, redirect, mode, signal.
- Manejo de respuestas complejas y flujos de redirección.
- Seguridad en el envío de datos sensibles.
*/

// --- 1. MÉTODO: BASIC AUTHENTICATION ---
/**
 * La autenticación básica envía las credenciales codificadas en el header.
 */
function peticionConBasicAuth() {
    const usuario = "admin";
    const password = "password123";

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "GET",
        headers: {
            // btoa() codifica a Base64: 'admin:password123'
            "Authorization": "Basic " + btoa(`${usuario}:${password}`),
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log("Basic Auth Res:", data))
    .catch(err => console.error("Error en Basic Auth:", err));
}

// --- 2. MÉTODO: BEARER TOKEN (JWT) ---
/**
 * Estándar moderno para APIs. El token suele obtenerse tras un Login.
 */
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // Creamos un recurso
    body: JSON.stringify({ title: "Post Seguro", body: "Contenido con token" }),
    // credentials: 'include' permite enviar cookies si la API las requiere
    credentials: "include", 
    // redirect: 'manual' para interceptar redirecciones 3xx
    redirect: "manual",
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})
.then(respuesta => {
    // Control de redirecciones opacas
    if (respuesta.type === "opaqueredirect") {
        console.log("Redirección detectada pero no seguida automáticamente.");
    } else {
        return respuesta.json();
    }
})
.then(datos => console.log("Bearer Token Res:", datos))
.catch(error => console.error("Error:", error));


// --- 3. GUÍA DE CARACTERÍSTICAS DE FETCH ---

/*
| Atributo     | Descripción                                                                 |
|--------------|-----------------------------------------------------------------------------|
| method       | Verbo HTTP: GET (defecto), POST, PUT, PATCH, DELETE.                        |
| headers      | Objeto con metadatos (Content-Type, Authorization, etc.).                   |
| body         | Los datos a enviar (String, FormData o Blob). No se usa en GET/HEAD.        |
| credentials  | 'omit' (defecto), 'same-origin' o 'include' (para enviar cookies/sesión).   |
| cache        | Control de caché: default, no-store, reload, no-cache, force-cache.         |
| mode         | 'cors' (defecto), 'no-cors' o 'same-origin'. Define seguridad cross-site.   |
| redirect     | 'follow' (defecto), 'error' o 'manual'. Cómo tratar los códigos 3xx.        |
| signal       | Permite cancelar una petición usando AbortController().                     |
*/



/**
 * Ejemplo adicional: Cómo cancelar una petición (signal)
 */
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/photos", { signal })
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log("Petición cancelada por el usuario.");
        }
    });

// Cancelamos la petición inmediatamente para el ejemplo
controller.abort();
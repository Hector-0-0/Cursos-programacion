/*
ARCHIVO: axiosAvanzado.js
TEMA: Características Pro de Axios
En este ejemplo se exploran:
- Peticiones POST: Envío de datos al servidor.
- Interceptores de Solicitud (Request): Inyección automática de Tokens de seguridad.
- Interceptores de Respuesta (Response): Transformación de datos entrantes.
- Peticiones Simultáneas: Uso de axios.all() y axios.spread().
*/

// --- 1. PETICIÓN POST ---
let datos = {
    title: 'NUEVO POST',
    body: 'Este es el contenido del post',
};



axios.post("https://jsonplaceholder.typicode.com/posts", datos)
    .then(respuesta => console.log("El post fue creado con exito", respuesta.data))
    .catch(error => console.log("Error: ", error));


// --- 2. INTERCEPTOR DE SOLICITUD (REQUEST) ---
// Útil para añadir encabezados de autenticación a TODAS las peticiones automáticamente.
let mitoken = "Este_es_mi_token_de_autenticacion";

axios.interceptors.request.use(
    config => {
        // Añadimos el Token Bearer antes de que la solicitud salga al servidor
        config.headers["Authorization"] = `Bearer ${mitoken}`;
        console.log("Solicitud enviada con configuracion (Header Auth inyectado): ", config);
        return config;
    }, 
    error => {
        return Promise.reject(error);
    }
);




// --- 3. INTERCEPTOR DE RESPUESTA (RESPONSE) ---
// Útil para modificar la data o manejar errores globales antes del .then()
axios.interceptors.response.use(
    respuesta => {
        // Ejemplo de transformación: agregamos un campo personalizado a cada respuesta
        respuesta.data.customField = "Este es un campo agregado por el interceptor de respuesta";
        return respuesta;
    }, 
    error => {
        // Aquí se pueden manejar códigos 401 (login expirado) o 404 de forma global
        return Promise.reject(error);
    }
);


// --- 4. PETICIONES SIMULTÁNEAS (CONCURRENCIA) ---
/* Definimos varias promesas. 
   Nota: Usamos JSONPlaceholder para que el ejemplo sea funcional y no de error. */
let pedido1 = axios.get("https://jsonplaceholder.typicode.com/posts/1");
let pedido2 = axios.get("https://jsonplaceholder.typicode.com/posts/2");
let pedido3 = axios.get("https://jsonplaceholder.typicode.com/posts/3");



// axios.all permite ejecutar un arreglo de promesas y esperar a que todas terminen
axios.all([pedido1, pedido2, pedido3])
    // axios.spread descompone el arreglo de respuestas en variables individuales
    .then(axios.spread((respuesta1, respuesta2, respuesta3) => {
        console.log("--- Resultados de pedidos múltiples ---");
        console.log("Datos del pedido 1: ", respuesta1.data); 
        console.log("Datos del pedido 2: ", respuesta2.data);
        console.log("Datos del pedido 3: ", respuesta3.data);
    }))
    .catch(error => console.log("Error en uno de los pedidos: ", error));

/*
RESUMEN TÉCNICO:
- Los interceptores permiten centralizar la lógica de seguridad y formato.
- axios.all() es fundamental para cargar dashboards o vistas que dependen de múltiples fuentes.
- axios.spread() mejora la legibilidad al evitar trabajar con índices de arreglos (respuestas[0]).
*/
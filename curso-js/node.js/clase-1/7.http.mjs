// 7.http.mjs

import http from 'node:http' // Protocolo HTTP para crear el servidor web
import { findAvailablePort } from './8.free-port.mjs' // Importamos nuestra utilidad

/**
 * process.env contiene las variables de entorno del sistema.
 * Es común que en producción (como Heroku o Azure) te den el puerto en process.env.PORT.
 */
const desiredPort = process.env.PORT ?? 3000

// Creamos la lógica del servidor
const server = http.createServer((req, res) => {
  console.log('Solicitud recibida!')
  res.end('Hola mundo') // Respuesta básica al navegador
})

/**
 * Primero buscamos un puerto libre.
 * Cuando la promesa se resuelve (then), recién ahí levantamos el servidor HTTP.
 */
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en: http://localhost:${port}`)
  })
})
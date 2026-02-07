import http from 'node:http' 
import fs from 'node:fs'

const desiredPort = process.env.PORT ?? 3000

const processRequest =(req,res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/') {
        res.end('<h1>Hola Mundxd</h1>')
    } else if (req.url === '/imagen-super-bonita.png') {
        fs.readFile('./images.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('Error al leer la imagen')
            } else {
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    } else if (req.url === '/contacto') {
      res.end('<h1>Contacto</h1>')
    } else {
        res.statusCode = 404
        res.end('<h1>Página no encontrada</h1>')
    }

}

const server = http.createServer(processRequest)
server.listen(desiredPort, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
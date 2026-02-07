import http from 'node:http'

const processRequest =(req,res) => {

}

const server = http.createServer(processRequest)
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto http://localhost:3000')
})
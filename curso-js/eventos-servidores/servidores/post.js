async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {    
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ userId: 1, title: titulo, body: contenido, })
        });
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud: ' + respuesta.statusText);
        }
        let datos = await respuesta.json();
        console.log('Registro creado:', datos);
    } catch (error) {
        console.error('Algo salio mal al crear el registro:', error);
    }    
}

crearPost('Mi nuevo post', 'Este es el contenido de mi nuevo post.');
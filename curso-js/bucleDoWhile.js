let usuario, clave, control;

control = 0;

do {
    usuario = prompt("Ingrese su nombre de usuario:");
    clave = prompt("Ingrese su clave:");
    if (usuario === "admin" && clave === "1234") {
        alert("¡Bienvenido, " + usuario + "!");
        control = 1;
    }
    else {
        alert("Usuario o clave incorrectos. Intente nuevamente.");
    }
}while(control != 1);
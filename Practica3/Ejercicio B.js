// Definimos una función que verifica el usuario y retorna una Promesa
function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        // Si el usuario es "admin", se concede el acceso
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            // Si no, se deniega el acceso
            reject("Acceso denegado");
        }
    });
}

// Llamamos a la función con el usuario "admin"
// Si la promesa se resuelve, se imprime el mensaje de acceso concedido
// Si se rechaza, se imprime el mensaje de acceso denegado
verificarUsuario("admin")
    .then(res => console.log(res))   
    .catch(err => console.error(err));

// Llamamos a la función con el usuario "Ivan"
// En este caso, la promesa será rechazada y se imprimirá el mensaje de acceso denegado
verificarUsuario("Ivan")
    .then(res => console.log(res))     
    .catch(err => console.error(err)); 

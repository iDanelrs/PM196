// Función que simula una petición a una API y retorna una promesa
function simularPeticionAPI() {
    return new Promise(resolve => {
        // Espera 5 segundos antes de resolver la promesa
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

// Función asíncrona para obtener los datos de la "API"
async function obtenerDatos() {
    // Espera a que la promesa se resuelva y guarda el resultado
    const resultado = await simularPeticionAPI();
    
    // Muestra el resultado por consola
    console.log(resultado);
}

// Llama a la función para iniciar el proceso
obtenerDatos();

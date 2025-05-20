// Definimos un objeto persona con varias propiedades
const persona = {
    nombre: "Danel Rolon",
    edad: 21,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

// Aplicamos desestructuración para extraer nombre, edad y ciudad del objeto persona
const { nombre, edad, direccion: { ciudad } } = persona;

// Imprimimos un mensaje usando las variables desestructuradas
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

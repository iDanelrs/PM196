const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];

// 1. Buscar a la persona con nombre "Luis"
const personaLuis = personas.find(p => p.nombre === "Luis"); // Busca el objeto cuya propiedad nombre sea "Luis"
console.log(personaLuis); // Imprime el objeto encontrado: { nombre: "Luis", edad: 35 }

// 2. Imprimir nombre y edad de cada persona
personas.forEach(p => {
    // Recorre cada elemento del arreglo e imprime su nombre y edad
    console.log(`${p.nombre} tiene ${p.edad} años`);
});

// 3. Sumar todas las edades
const totalEdades = personas.reduce((total, p) => total + p.edad, 0); // Suma todas las edades del arreglo
console.log(`La suma total de edades es: ${totalEdades}`); // Imprime la suma total de las edades (85)

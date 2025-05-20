const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

// 1. Filtrar productos con precio mayor a 1000
const productosFiltrados = productos.filter(p => p.precio > 1000);

// 2. Obtener solo los nombres de los productos filtrados
const nombres = productosFiltrados.map(p => p.nombre);

// Mostrar en consola los nombres de los productos filtrados
console.log(nombres); // ["Laptop", "Monitor"]

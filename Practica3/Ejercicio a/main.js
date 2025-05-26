// Importa la función 'restar' desde el archivo 'utils'
const restar = require('./utils');

// Imprime el resultado de restar 5 a 10 (debería mostrar 5)
console.log(restar(10, 5)); // 5

// Imprime el resultado de restar 3 a 20 (debería mostrar 17)
console.log(restar(20, 3)); // 17

// Imprime el resultado de restar 7 a 7 (debería mostrar 0)
console.log(restar(7, 7));  // 0

let products = ['mesa', 'silla', 'notebook', 'teclado'];

products = products.concat(['pantalla lcd', 'sony tv']);

const fruits = ['peras', 'manzanas', 'sandias', 'frutillas'];

const mercado = [...products, ...fruits, 'lechuga', 'papas', 'uvas'];
const mercado2 = products.concat(fruits).concat('lechuga', 'papas', 'uvas');

console.log(products);
console.log(mercado);
console.log(mercado2);

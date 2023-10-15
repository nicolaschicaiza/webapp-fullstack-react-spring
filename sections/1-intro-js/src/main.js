const sayHello = (name = "Pepe", age = 0) => `Hello world fuction! ${name}, edad ${age}`;
const add = (a = 0, b = 0) => a + b;

const result = sayHello('Andres', 18);

console.log(result);

console.log(add(10, 5));

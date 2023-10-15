// Contexto de variables
let name = "Pepe"; // declaración de variable
name = "Andres";

const lastname = "Doe"; // declaración de constante

const condicion = true;

if (condicion) { // flujo hijo dentro del principal
  let name = "Ale"
  const lastname = "Roe"
  console.log("Hello!, " + name + " " + lastname);
}
console.log("Hello!, " + name + " " + lastname);

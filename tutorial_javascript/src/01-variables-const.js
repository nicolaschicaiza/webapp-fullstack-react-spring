/** Contexto de variables */
let firstname = "Pepe"; // declaración de variable
firstname = "Andres";

const lastname = "Doe"; // declaración de constante

const condicion = true;

if (condicion) { // flujo hijo dentro del principal
  let name = "Ale"
  const lastname = "Roe"
  console.log("Hello!, " + name + " " + lastname);
}

/** Template String */
console.log(`Hello!, 
${firstname} - ${lastname}`); // Interpolación de String

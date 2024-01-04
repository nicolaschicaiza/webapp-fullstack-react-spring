const invoice = {
  id: 10,
  name: "Compras de Oficina",
  date: new Date(),
  client: {
    id: 2,
    name: 'Jhon',
    lastname: 'Doe',
    age: 20
  },
  items: [
    {
      product: 'keyboard',
      price: 399,
      quantity: 2
    },
    {
      product: 'mouse',
      price: 200,
      quantity: 1
    },
    {
      product: 'papper',
      price: 100,
      quantity: 10
    }
  ],
  total: function() {
    let total = 0;
    this.items.forEach(item => total += item.price * item.quantity);
    return total;
  },
  greeting: function() {
    return `Hello ${this.client.name}`;
  }
};

// invoice.client.name = 'Pepe';
// invoice.total = 5000;
console.log(`Total: ${invoice.total()}`);

const greeting = invoice.greeting();
console.log(greeting);

/** Operador Spread en Objetos */
// const invoice2 = invoice; // Esta forma apunta a la misma variable
const invoice2 = { ...invoice }; // Crear nueva instancia

const result = invoice === invoice2;

if (result) console.log(result);
else console.log(' No son iguales');

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);

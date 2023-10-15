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
  total: 1000,
  greeting: function() {
    return `Hello ${this.client.name}`;
  }
};

// invoice.client.name = 'Pepe';
invoice.total = 5000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting)

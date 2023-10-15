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
      product: 'paper',
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
console.log(greeting)

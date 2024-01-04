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

console.log(invoice.company?.name);
console.log(invoice.client?.address?.street);
if (invoice.company != undefined && invoice.company.name) {
  console.log('Perfect!!')
} else {
  console.log("Company Doesn't went");
}



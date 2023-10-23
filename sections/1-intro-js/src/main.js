const invoices = [
  {
    id: 1,
    name: "Compras de Oficina",
    client: {
      name: 'Maria',
      lastname: 'Doe',
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
    ]
  },
  {
    id: 2,
    name: "Compras de Computación",
    client: {
      name: 'Pepe',
      lastname: 'Doe',
    },
    items: [
      {
        product: 'keyboard',
        price: 399,
        quantity: 2
      },
      {
        product: 'screen 17inch',
        price: 800,
        quantity: 1
      },
      {
        product: 'cpu intel',
        price: 1000,
        quantity: 10
      }
    ]
  },
  {
    id: 3,
    name: "Compras de Papeleria",
    client: {
      name: 'Jhon',
      lastname: 'Doe',
    },
    items: [
      {
        product: 'pencil',
        price: 500,
        quantity: 1
      },
      {
        product: 'paper',
        price: 100,
        quantity: 10
      }
    ]
  },
];

const invoicesName = invoices.map(i => {
  return i.name;
});

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map(i => {
  return i.client.name;
});

console.log(invoicesClient);

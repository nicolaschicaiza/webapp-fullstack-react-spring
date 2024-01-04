const papper = {
  product: 'papper',
  price: 100,
  quantity: 10
}

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
      papper
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
      papper
    ]
  },
];

const invoiceByClientName = (clientName) => invoices.find(i => i.client.name === clientName);
// export default (clientName) => invoices.find(i => i.client.name === clientName);
//

const invoiceById = (id) => {
  return invoices.find(i => i.id === id);
}

export {
  invoices,
  papper,
  invoiceByClientName as default,
  invoiceById
}

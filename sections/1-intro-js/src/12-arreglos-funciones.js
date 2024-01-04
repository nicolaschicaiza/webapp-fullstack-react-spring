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

const invoicesName = invoices.map(i => i.name);

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map(i => i.client.name);

console.log(invoicesClient);

const invoiceById = invoices.find(i => i.id === 2);
console.log(invoiceById);

const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe');
console.log(invoiceByClientName);

const invoicesFilter = invoices.filter(i => i.id > 1);
console.log(invoicesFilter);

console.log('filter eliminar');
const invoiceDeleted = invoices.filter(i => i.id != '2');
console.log(invoiceDeleted);

const invoicesFilter2 = invoices.filter(i => i.items.includes(papper));
console.log(invoicesFilter2);


const result = invoices.some(i => i.client.name === 'Pepe');
console.log(result)

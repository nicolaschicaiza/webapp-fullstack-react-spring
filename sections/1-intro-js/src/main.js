import { invoiceByClientName, invoices, papper } from "./data/invoices";

const invoicesName = invoices.map(i => i.name);

console.log(invoices);
console.log(invoicesName);

const invoicesClient = invoices.map(i => i.client.name);

console.log(invoicesClient);

const invoiceById = invoices.find(i => i.id === 2);
console.log(invoiceById);

// const invoiceByClientName = invoices.find(i => i.client.name === 'Pepe');
console.log('Buscar por nombre de cliente');
console.log(invoiceByClientName('Maria'));

const invoicesFilter = invoices.filter(i => i.id > 1);
console.log(invoicesFilter);

console.log('filter eliminar');
const invoiceDeleted = invoices.filter(i => i.id != '2');
console.log(invoiceDeleted);

const invoicesFilter2 = invoices.filter(i => i.items.includes(papper));
console.log(invoicesFilter2);


const result = invoices.some(i => i.client.name === 'Pepe');
console.log(result)

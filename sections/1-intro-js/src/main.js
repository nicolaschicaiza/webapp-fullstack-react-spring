const invoice = {
  id: 10,
  name: "Compras de Oficina",
  date: new Date(),
  client: "Jhon Doe",
  total: 1000,
};

invoice.client = "Pepe Roe";
invoice.total = 5000;
console.log(invoice);

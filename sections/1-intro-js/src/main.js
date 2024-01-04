import { invoiceById } from "./data/invoices";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoiceById(11);
    if (result) {
      resolve(result);
    } else {
      reject("error: no existe la facuta por el id!");
    }
  }, 2500);
});

promise.then(console.log).catch(console.error);

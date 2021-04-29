const Script  = require('./DAO');

let productosDAO = new Script('./productos.json');

console.log('1) Número de productos con existencia mayor a 20.');
console.log(productosDAO.productsInStockMore(20));

console.log('2) Número de productos con existencia menos a 15.');
console.log(productosDAO.productsInStockLess(15));

console.log('3) Lista de productos con la misma clasificación y precio mayor 15.50');
console.log(productosDAO.productsSameCategoryPriceMore(15.5,'verdura'));

console.log('4) Lista de productos con precio mayor a 20.30 y menor a 45.00');
console.log(productosDAO.productsPriceBetween(20.3,45));

console.log('5) Número de productos agrupados por su clasificación');
console.log(productosDAO.productsSameCategory('utensilios de cocina'));

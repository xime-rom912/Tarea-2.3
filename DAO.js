let fs = require('fs');
class ProductosDAO {
    constructor(fileName) {
        this.fileName = fileName;
        let contents = fs.readFileSync(fileName, 'utf8');
        this.productData = JSON.parse(contents);
    }
    productsInStockMore(value){
        return this.productData.filter(product => product.stock > value);
    }
    productsInStockLess(value){
        return this.productData.filter(product => product.stock < value);
    }
    productsSameCategoryPriceMore(price,category){
        return this.productData.filter( product => product.price > price && product.category === category);
    }
    productsPriceBetween(num1,num2){
        return this.productData.filter(product => product.price > num1 && product.price < num2);
    }
    productsSameCategory(category){
        return this.productData.filter(product => product.category === category);
    }
}

module.exports = ProductosDAO;

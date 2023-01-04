let Product,ProductService = require('../src/week3-day5-16dec2022/productService');
//declaration is here
let product;
let productService;

//initialise them inside the before each block
beforeEach(function(){
 product =new Product(111,'pen',344);

productService = new ProductService();
    
});
//xdescribe will temporarily exclude suite from being tested
//same signature as describe
//marked as pending
xdescribe("checking product service impl",function(){


    expect(productService.addProduct(product)).toEqual(product);
    

})
